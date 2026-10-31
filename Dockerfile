# OxY portfolio — static export served by nginx.
# Build:  docker build -t sharper8-portfolio:main .
# Output: nginx serving the Next.js `out/` directory on :80.

FROM node:20-bookworm-slim AS builder
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
ENV NODE_ENV=production
RUN node node_modules/.bin/next build

FROM nginx:1.27-alpine AS runner
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=5 --start-period=10s \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
