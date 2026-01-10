# Suggested Commands

This project uses **mise monorepo mode** with `//path:task` syntax.

## Setup Commands

```bash
# Install mise (if not installed)
curl https://mise.run | sh

# Install all runtimes (Node 24, Python 3.13, Flutter 3, pnpm 10, uv, Terraform)
mise install

# Install dependencies
cd apps/web && pnpm install
cd apps/api && uv sync --frozen
cd apps/worker && uv sync --frozen
cd apps/mobile && flutter pub get
```

## Root Tasks (All Apps)

| Command | Description |
|---------|-------------|
| `mise dev` | Start all services |
| `mise lint` | Lint all apps |
| `mise format` | Format all apps |
| `mise test` | Test all apps |
| `mise typecheck` | Type check all apps |
| `mise i18n:build` | Build i18n files |
| `mise gen:api` | Generate OpenAPI schema and API clients |
| `mise tasks --all` | List all available tasks |

## API (apps/api) - Python/FastAPI

| Command | Description |
|---------|-------------|
| `mise //apps/api:dev` | Start development server |
| `mise //apps/api:test` | Run tests |
| `mise //apps/api:lint` | Run Ruff linter |
| `mise //apps/api:format` | Format with Ruff |
| `mise //apps/api:typecheck` | Type check with mypy |
| `mise //apps/api:migrate` | Run DB migrations |
| `mise //apps/api:migrate:create` | Create new migration |
| `mise //apps/api:gen:openapi` | Generate OpenAPI schema |
| `mise //apps/api:infra:up` | Start local infra (PostgreSQL, Redis, MinIO) |
| `mise //apps/api:infra:down` | Stop local infrastructure |

## Web (apps/web) - Next.js/TypeScript

| Command | Description |
|---------|-------------|
| `mise //apps/web:dev` | Start development server |
| `mise //apps/web:build` | Production build |
| `mise //apps/web:test` | Run Vitest tests |
| `mise //apps/web:lint` | Run Biome linter |
| `mise //apps/web:format` | Format with Biome |
| `mise //apps/web:typecheck` | Type check with tsc |
| `mise //apps/web:gen:api` | Generate API client (Orval) |

## Worker (apps/worker) - Python/FastAPI

| Command | Description |
|---------|-------------|
| `mise //apps/worker:dev` | Start worker |
| `mise //apps/worker:test` | Run tests |
| `mise //apps/worker:lint` | Run Ruff linter |
| `mise //apps/worker:format` | Format with Ruff |

## Mobile (apps/mobile) - Flutter/Dart

| Command | Description |
|---------|-------------|
| `mise //apps/mobile:dev` | Run on device/simulator |
| `mise //apps/mobile:build` | Build app |
| `mise //apps/mobile:test` | Run Flutter tests |
| `mise //apps/mobile:lint` | Run flutter analyze |
| `mise //apps/mobile:format` | Format with dart format |
| `mise //apps/mobile:gen:l10n` | Generate localizations |
| `mise //apps/mobile:gen:api` | Generate API client (swagger_parser) |

## Infrastructure (apps/infra) - Terraform

| Command | Description |
|---------|-------------|
| `mise //apps/infra:init` | Initialize Terraform |
| `mise //apps/infra:plan` | Preview changes |
| `mise //apps/infra:apply` | Apply changes |
| `mise //apps/infra:plan:prod` | Preview production |
| `mise //apps/infra:apply:prod` | Apply production |

## i18n (packages/i18n)

| Command | Description |
|---------|-------------|
| `mise //packages/i18n:build` | Build i18n files for web and mobile |
| `mise //packages/i18n:build:web` | Build for web only |
| `mise //packages/i18n:build:mobile` | Build for mobile only |

## Fastlane (Mobile CI/CD)

```bash
cd apps/mobile
bundle install

# Android
bundle exec fastlane android build       # Build APK
bundle exec fastlane android firebase    # Deploy to Firebase App Distribution

# iOS
bundle exec fastlane ios build           # Build iOS (no codesign)
bundle exec fastlane ios testflight_deploy  # Deploy to TestFlight
```

## System Utils (Darwin/macOS)

```bash
# Git operations
git status
git diff
git log --oneline -10
git add <files>
git commit -m "message"

# File operations
ls -la
find . -name "*.py" -type f
grep -r "pattern" --include="*.ts"

# Docker
docker compose -f apps/api/docker-compose.infra.yml up -d
docker compose -f apps/api/docker-compose.infra.yml down
docker compose -f apps/api/docker-compose.infra.yml down -v  # with volume cleanup
```
