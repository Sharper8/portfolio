# Multi-stage Dockerfile for Next.js 15 (App Router) production build
# 1) Base image with Node
FROM node:20-bookworm-slim AS base

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# 2) Install dependencies (with clean install)
FROM base AS deps
WORKDIR /app

# Copy only package manifests to leverage Docker layer caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./

# Default to npm if no other lockfile is present
ENV NODE_ENV=development
RUN set -eux; \
    if [ -f pnpm-lock.yaml ]; then \
      corepack enable; corepack prepare pnpm@latest --activate; \
      pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      corepack enable; corepack prepare yarn@stable --activate; \
      yarn install --frozen-lockfile; \
    else \
      npm ci; \
    fi

# 3) Builder stage
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the app (production)
ENV NODE_ENV=production
RUN set -eux; \
    if [ -f pnpm-lock.yaml ]; then \
      corepack enable; corepack prepare pnpm@latest --activate; \
      node node_modules/.bin/next build; \
    elif [ -f yarn.lock ]; then \
      corepack enable; corepack prepare yarn@stable --activate; \
      node node_modules/.bin/next build; \
    else \
      node node_modules/.bin/next build; \
    fi

# 4) Production-image dependencies only
FROM base AS prod-deps
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./
ENV NODE_ENV=production
RUN set -eux; \
    if [ -f pnpm-lock.yaml ]; then \
      corepack enable; corepack prepare pnpm@latest --activate; \
      pnpm i --prod --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      corepack enable; corepack prepare yarn@stable --activate; \
      yarn install --frozen-lockfile --production=true; \
    else \
      npm ci --omit=dev; \
    fi

# 5) Runner stage: copy necessary build artifacts
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production \
  PORT=3000 \
  HOSTNAME=0.0.0.0

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy node_modules for production
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy Next.js artifacts from the builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.* ./

# Set proper permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000
# Note: No host port is published in docker-compose; a reverse proxy on the
# external network (Portfolio_network) will connect directly to this internal
# port 3000 container endpoint.

# Start the Next.js server
CMD ["node", "/app/node_modules/.bin/next", "start"]
