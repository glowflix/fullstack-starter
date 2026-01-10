# Code Style & Conventions

## JavaScript/TypeScript (Web) - Biome

### Configuration: `biome.json`

| Setting | Value |
|---------|-------|
| Indent | 2 spaces |
| Quotes | double |
| Semicolons | always |
| Trailing commas | ES5 |
| Line width | 100 |

### Key Rules
- `noUnusedImports`: error
- `noUnusedVariables`: error
- `noExplicitAny`: error
- `useImportType`: error (use `import type` for types)
- `useExhaustiveDependencies`: warn

### Ignored Patterns
- `node_modules/`, `.next/`, `dist/`, `build/`, `coverage/`
- Generated files: `*.gen.ts`, `apps/web/src/lib/api/**`

## Python (API, Worker) - Ruff

### Configuration: `ruff.toml`

| Setting | Value |
|---------|-------|
| Line length | 88 |
| Target version | Python 3.12 |
| Quote style | double |
| Indent style | space |

### Rule Sets
- `E/W`: pycodestyle (errors/warnings)
- `F`: Pyflakes
- `I`: isort (import sorting)
- `B`: flake8-bugbear
- `UP`: pyupgrade
- `ASYNC`: flake8-async
- `S`: bandit (security)
- `SIM`: flake8-simplify
- `RUF`: Ruff-specific

### Ignored Rules
- `B008`: Function call in argument defaults (for FastAPI Depends)
- `S101`: Use of assert (allowed in tests)

### Type Checking
- mypy with strict mode
- Pydantic plugin enabled

## Dart/Flutter (Mobile)

### Configuration: `analysis_options.yaml` + `very_good_analysis`

- Strict mode enabled
- All recommended lints
- Flutter-specific lints
- `dart format` for formatting

## Terraform

- `terraform fmt` for formatting
- `terraform validate` for validation

## General Conventions

### Naming
- TypeScript: camelCase for functions/variables, PascalCase for classes/components
- Python: snake_case for functions/variables, PascalCase for classes
- Dart: camelCase for functions/variables, PascalCase for classes

### Documentation
- TypeScript: JSDoc for public APIs
- Python: Docstrings (Google style recommended)
- Dart: Dartdoc comments

### Type Safety
- **NEVER** use `as any`, `@ts-ignore`, `@ts-expect-error` in TypeScript
- **ALWAYS** use type hints in Python
- **ALWAYS** use strict types in Dart
