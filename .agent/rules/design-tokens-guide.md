# Design Tokens Workflow

## Source of Truth
The single source of truth for all design tokens is located in `packages/design-tokens/src/tokens.ts`.
- **Do NOT** edit `apps/web/src/app/[locale]/tokens.css` directly - it's auto-generated.
- **Do NOT** edit `apps/mobile/lib/core/theme/generated_theme.dart` directly - it's auto-generated.
- **ALWAYS** make changes in `packages/design-tokens/src/tokens.ts`.

## Color Space
- **SSOT Format**: OKLCH (Lightness, Chroma, Hue)
- **Web Output**: CSS OKLCH variables (P3 wide-gamut support)
- **Mobile Output**: Flutter `Color.from(colorSpace: ColorSpace.displayP3)` for P3 colors

## Token Structure

```typescript
// packages/design-tokens/src/tokens.ts
export const tokens = {
  color: {
    light: { primary: { l: 0.85, c: 0.2, h: 130 }, ... },
    dark: { primary: { l: 0.85, c: 0.2, h: 130 }, ... },
  },
  radius: { base: 10, sm: 6, md: 8, lg: 10, xl: 14 },
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24 },
  typography: { fontFamily, fontSize, fontWeight, lineHeight },
  style: { borderWidth: 1, disabledOpacity: 0.5 },
};
```

## Workflow

### 1. Modify Tokens
Edit `packages/design-tokens/src/tokens.ts`:
- Add/update colors in `tokens.color.light` and `tokens.color.dark`
- Modify radius, spacing, typography, or style values

### 2. Build & Distribute
Run the build command to generate platform-specific outputs:

```bash
pnpm --filter design-tokens build
```

This generates:
- **Web**: `apps/web/src/app/[locale]/tokens.css` (OKLCH CSS variables)
- **Mobile**: `apps/mobile/lib/core/theme/generated_theme.dart` (ForUI FThemeData)

### 3. Watch Mode (Development)
For automatic rebuilds during development:

```bash
pnpm --filter design-tokens dev
```

## Adding New Colors

### Step 1: Add to tokens.ts
```typescript
color: {
  light: {
    // Add new color with OKLCH values
    success: { l: 0.65, c: 0.2, h: 145 },
    successForeground: { l: 0.2, c: 0, h: 0 },
  },
  dark: {
    success: { l: 0.65, c: 0.2, h: 145 },
    successForeground: { l: 0.98, c: 0, h: 0 },
  },
}
```

### Step 2: Update ForUI Mapping (if needed)
If adding a new semantic color, update `tooling/build-forui-theme.ts`:
```typescript
const colorMap: Record<string, string> = {
  // ... existing mappings
  success: "success",
  successForeground: "successForeground",
};
```

### Step 3: Build
```bash
pnpm --filter design-tokens build
```

## OKLCH Color Guide

| Component | Range | Description |
|-----------|-------|-------------|
| L (Lightness) | 0-1 | 0 = black, 1 = white |
| C (Chroma) | 0-0.4+ | 0 = gray, higher = more vivid |
| H (Hue) | 0-360 | Color wheel angle |
| A (Alpha) | 0-1 | Optional, defaults to 1 |

### Common Hue Values
- 0: Red
- 30: Orange
- 60: Yellow
- 130: Lime Green (primary)
- 180: Cyan
- 240: Blue
- 300: Magenta

## Testing
Run tests to verify color conversion accuracy:

```bash
pnpm --filter design-tokens test
```

Tests cover:
- OKLCH to P3 conversion accuracy
- CSS generation correctness
- Flutter theme generation
- Edge cases and boundary conditions
