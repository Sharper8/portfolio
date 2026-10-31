# Portfolio — ROADMAP

Public portfolio of **OxY** (anonymous persona — no real name/face; X @0xymoore, GitHub
Sharper8) with visuals — the credibility surface for build-in-public and the landing
destination for growth-engine traffic. 2026-10-31: full redesign to the tty-terminal
variant, static export, hosted on the APPS host (kanban t_c09f7b6c).

## Queue

- [ ] **Project visuals (M1.1/M1.2 residue)** — the 2026-10-31 OxY refresh shipped
  text-first cards; add real screenshots/demo reels per project (ShipReel reels when
  available), then Lighthouse ≥90 re-check.
- [ ] **Re-host to Cloudflare Pages** once the CF vantage-account migration
  (`PAI/deploy/cloudflare-migration/`) completes: static export already builds
  (`next build` → `out/`), so Pages is a pure drag-and-drop/wrangler publish; the
  APPS-host nginx container is the interim target (decision: kanban t_c09f7b6c).
- [ ] **French variant (M3.1)** — hreflang FR/EN once copy stabilizes.

## First task for the next agent

**Content inventory + project-data file (M1.1).** No blockers, purely additive: enumerate the
shippable projects with their one-line pitch, visuals status, and live URL; commit as
`data/projects.json`. This unblocks every later task. See M1 below.

## Milestones

### M1 — Content inventory + shippable single page

- [ ] **M1.1 Project inventory** — source of truth list: Alpha Finder (alpha.devprocore.com),
  ShipReel, Mission Control, Omnimeal, Omninote, hydro-viz, growth-engine/agent-SaaS as
  "building in public" entries. Fields: name, pitch, stack, status, url, visual assets present.
  Acceptance: `data/projects.json` validates against a schema; every active PAI/burst project
  present. Effort: 0.5 day.
- [ ] **M1.2 One-page visual portfolio** — reuse the existing Next.js app: project cards with
  real screenshots/demo reels (ShipReel can supply videos), dark design per Sylva's taste;
  reuse-first: check popular-web-designs skill for a proven layout before inventing one.
  Acceptance: page deploys publicly, Lighthouse ≥90, every card has a visual. Effort: 2-3 days.

### M2 — Build-in-public surface

- [ ] **M2.1 Changelog/blog lane** — short entries fed by ShipReel demo reels + ops-status
  summaries; markdown-driven, no CMS.
  Acceptance: 3 real entries published from actual project events. Effort: 1-2 days.
- [ ] **M2.2 Growth-engine wiring** — portfolio URL as the canonical link in growth-engine
  content; GEO legibility pass (llms.txt, schema.org — spec lives in growth-engine ROADMAP M1.2,
  execute here).
  Acceptance: probe (growth-engine M1.1) cites portfolio for a relevant prompt. Effort: 1 day.

### M3 — Polish + scale

- [ ] **M3.1 i18n FR/EN** — French-first option; hreflang correct.
  Acceptance: full FR translation, language switcher. Effort: 1-2 days.
- [ ] **M3.2 KPIs + analytics** — per-project click-through to live apps (Mission Control
  dashboard), provenance on every claim.
  Acceptance: dashboard shows per-card CTR. Effort: 1 day.

## Dependencies & blockers (reference only — do not solve here)

- Visual assets for each project (screenshots/reels) — mostly satisfied via ShipReel; any
  missing visuals are tasks, not blockers (placeholder allowed, tracked in M1.1).
- No account-level blockers. Deploy target = swap fleet APPS host pattern (188.245.65.46)
  per fleet doctrine.

## Cost & observability

- Static site — near-zero run cost; build/deploy runs logged per swap-fleet ops standard.
- KPIs: visitors, per-project CTR, probe citation rate, build/deploy status — surfaced in
  Mission Control; monthly cost ≈ 0 reported to the token governor.
