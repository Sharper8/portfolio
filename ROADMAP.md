# Portfolio — ROADMAP

Public portfolio of Sylva's projects with visuals — the credibility surface for
build-in-public and the landing destination for growth-engine traffic. Quick win: it feeds
every other product's distribution. (Repo already contains a Next.js scaffold — this ROADMAP is
additive, no rewrite of existing app code.)

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
