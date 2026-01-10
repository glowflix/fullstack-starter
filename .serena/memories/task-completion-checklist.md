# Task Completion Checklist

When completing a task in this project, follow these steps:

## Before Committing

### 1. Lint & Format

```bash
# All apps
mise lint
mise format

# Or specific app
mise //apps/api:lint && mise //apps/api:format
mise //apps/web:lint && mise //apps/web:format
mise //apps/mobile:lint && mise //apps/mobile:format
mise //apps/worker:lint && mise //apps/worker:format
```

### 2. Type Check

```bash
# All apps with type checking
mise typecheck

# Or specific app
mise //apps/api:typecheck    # mypy for Python
mise //apps/web:typecheck    # tsc for TypeScript
```

### 3. Run Tests

```bash
# All apps
mise test

# Or specific app
mise //apps/api:test
mise //apps/web:test
mise //apps/mobile:test
mise //apps/worker:test
```

### 4. Build (if applicable)

```bash
mise //apps/web:build    # Production build for web
mise //apps/mobile:build # Build mobile app
```

## API Changes

If you modified the API:

1. Generate OpenAPI schema:
   ```bash
   mise //apps/api:gen:openapi
   ```

2. Regenerate API clients:
   ```bash
   mise //apps/web:gen:api     # Orval for web
   mise //apps/mobile:gen:api  # swagger_parser for mobile
   ```

Or use combined command:
```bash
mise gen:api
```

## i18n Changes

If you modified translation strings:

```bash
mise i18n:build
```

## Database Changes

If you modified models:

1. Create migration:
   ```bash
   mise //apps/api:migrate:create "description of changes"
   ```

2. Apply migration:
   ```bash
   mise //apps/api:migrate
   ```

## Pre-commit Hooks

The project has pre-commit hooks that automatically:
- Run lint for changed apps (api, web, worker, mobile)
- Validate commit message format (commitlint)

Commit message format: [Conventional Commits](https://www.conventionalcommits.org/)
- `feat:` - new feature
- `fix:` - bug fix
- `docs:` - documentation
- `style:` - formatting
- `refactor:` - code refactoring
- `test:` - tests
- `chore:` - maintenance

## Quick Verification Commands

```bash
# Verify everything before pushing
mise lint && mise typecheck && mise test
```
