# Gitleaks secret-leak prevention

Two enforcement layers, both using the maintained official
[gitleaks](https://github.com/gitleaks/gitleaks), pinned **v8.30.1**:

| Layer | What it does |
|---|---|
| Pre-commit hook (`.pre-commit-config.yaml`) | Scans staged changes on every `git commit`; blocks the commit on a match. |
| CI (`.github/workflows/gitleaks.yml`) | Scans the **full git history** on every push and PR using a pinned, SHA-256-checksum-verified gitleaks binary. Output is redacted (`--redact=100`); the JSON report is uploaded as an artifact on failure. |

No GitHub Advanced Security license is required — this runs on standard
`ubuntu-latest` runners with the official open-source binary.

## Setup (once per clone)

```bash
# 1. Install gitleaks v8.30.1: https://github.com/gitleaks/gitleaks/releases/tag/v8.30.1
# 2. Install the hook:
pre-commit install            # if missing: pipx install pre-commit  (or: uv tool install pre-commit)
pre-commit run --all-files    # sanity check
```

## If the hook or CI flags something

1. **Real secret** — do not commit/push. Revoke or rotate the credential first,
   then source it from your secrets store (OpenBao) or an untracked env file at runtime.
2. **False positive** — add the finding's `Fingerprint` (shown in the gitleaks
   report) to `.gitleaksignore`, one per line with a comment, or narrow the rule
   in a repo-local `.gitleaks.toml`.

Never paste secret values into issues, PRs, or docs — fingerprints only.

## Baseline (full-history scan, 2026-11-08, gitleaks v8.30.1)

- **0 findings** — clean. CI is green; any new secret fails the build.
