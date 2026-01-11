/**
 * Design Tokens - Single Source of Truth
 *
 * All design tokens are defined here using OKLCH color space.
 * This file is the source for both web (CSS) and mobile (Flutter) theme generation.
 */

/**
 * OKLCH Color representation
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
 */
export interface OklchColor {
  /** Lightness: 0 (black) to 1 (white) */
  l: number;
  /** Chroma: 0 (gray) to 0.4+ (vivid) */
  c: number;
  /** Hue: 0-360 degrees on color wheel */
  h: number;
  /** Alpha: 0-1, defaults to 1 */
  a?: number;
}

/**
 * Color scheme tokens for a theme mode (light/dark)
 */
export interface ColorScheme {
  background: OklchColor;
  foreground: OklchColor;
  card: OklchColor;
  cardForeground: OklchColor;
  popover: OklchColor;
  popoverForeground: OklchColor;
  primary: OklchColor;
  primaryForeground: OklchColor;
  secondary: OklchColor;
  secondaryForeground: OklchColor;
  muted: OklchColor;
  mutedForeground: OklchColor;
  accent: OklchColor;
  accentForeground: OklchColor;
  destructive: OklchColor;
  destructiveForeground: OklchColor;
  border: OklchColor;
  input: OklchColor;
  ring: OklchColor;
  // Chart colors
  chart1: OklchColor;
  chart2: OklchColor;
  chart3: OklchColor;
  chart4: OklchColor;
  chart5: OklchColor;
  // Sidebar colors
  sidebarBackground: OklchColor;
  sidebarForeground: OklchColor;
  sidebarPrimary: OklchColor;
  sidebarPrimaryForeground: OklchColor;
  sidebarAccent: OklchColor;
  sidebarAccentForeground: OklchColor;
  sidebarBorder: OklchColor;
  sidebarRing: OklchColor;
}

/**
 * Radius tokens in pixels
 */
export interface RadiusTokens {
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

/**
 * Spacing tokens in pixels
 */
export interface SpacingTokens {
  xs: number;
  sm: number;
  md: number;
  base: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
}

/**
 * Typography tokens
 */
export interface TypographyTokens {
  fontFamily: {
    sans: string;
    mono: string;
  };
  fontSize: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    xl2: number;
    xl3: number;
    xl4: number;
    xl5: number;
    xl6: number;
    xl7: number;
    xl8: number;
  };
  fontWeight: {
    regular: number;
    medium: number;
    bold: number;
    black: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    base: number;
    lg: number;
    xl: number;
    xl2: number;
    xl3: number;
    xl4: number;
    xl5: number;
    xl6: number;
    xl7: number;
    xl8: number;
  };
  letterSpacing: {
    normal: number;
    tight: number;
    wide: number;
  };
}

/**
 * Style tokens for general styling
 */
export interface StyleTokens {
  borderWidth: number;
  disabledOpacity: number;
  hoverDarken: number;
  hoverLighten: number;
}

/**
 * Semantic color tokens
 */
export interface SemanticColors {
  success: OklchColor;
  successForeground: OklchColor;
  warning: OklchColor;
  warningForeground: OklchColor;
  info: OklchColor;
  infoForeground: OklchColor;
}

/**
 * Complete design tokens structure
 */
export interface DesignTokens {
  colors: {
    light: ColorScheme;
    dark: ColorScheme;
    semantic: SemanticColors;
  };
  radius: RadiusTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  style: StyleTokens;
}

/**
 * Helper function to create OKLCH color
 */
const oklch = (l: number, c: number, h: number, a?: number): OklchColor => ({
  l,
  c,
  h,
  ...(a !== undefined && { a }),
});

/**
 * Design tokens definition
 */
export const tokens: DesignTokens = {
  colors: {
    light: {
      // Core backgrounds
      background: oklch(1, 0, 0), // Pure white
      foreground: oklch(0.145, 0, 0), // Near black

      // Card surfaces
      card: oklch(1, 0, 0),
      cardForeground: oklch(0.145, 0, 0),

      // Popover surfaces
      popover: oklch(1, 0, 0),
      popoverForeground: oklch(0.145, 0, 0),

      // Primary - Lime/Green accent
      primary: oklch(0.85, 0.2, 130),
      primaryForeground: oklch(0.2, 0.05, 130),

      // Secondary - Neutral gray
      secondary: oklch(0.97, 0, 0),
      secondaryForeground: oklch(0.145, 0, 0),

      // Muted - Subtle gray
      muted: oklch(0.97, 0, 0),
      mutedForeground: oklch(0.55, 0, 0),

      // Accent - Same as secondary for consistency
      accent: oklch(0.97, 0, 0),
      accentForeground: oklch(0.145, 0, 0),

      // Destructive - Red
      destructive: oklch(0.55, 0.22, 27),
      destructiveForeground: oklch(0.985, 0, 0),

      // Borders and inputs
      border: oklch(0.92, 0, 0),
      input: oklch(0.92, 0, 0),
      ring: oklch(0.85, 0.2, 130), // Same as primary

      // Chart colors - Colorful palette
      chart1: oklch(0.65, 0.19, 150), // Green
      chart2: oklch(0.6, 0.18, 200), // Teal
      chart3: oklch(0.55, 0.2, 250), // Blue
      chart4: oklch(0.6, 0.22, 300), // Purple
      chart5: oklch(0.65, 0.2, 50), // Orange

      // Sidebar
      sidebarBackground: oklch(0.985, 0, 0),
      sidebarForeground: oklch(0.145, 0, 0),
      sidebarPrimary: oklch(0.85, 0.2, 130),
      sidebarPrimaryForeground: oklch(0.2, 0.05, 130),
      sidebarAccent: oklch(0.97, 0, 0),
      sidebarAccentForeground: oklch(0.145, 0, 0),
      sidebarBorder: oklch(0.92, 0, 0),
      sidebarRing: oklch(0.85, 0.2, 130),
    },

    dark: {
      // Core backgrounds - with alpha for overlay effects
      background: oklch(0.145, 0, 0),
      foreground: oklch(0.985, 0, 0),

      // Card surfaces
      card: oklch(0.145, 0, 0),
      cardForeground: oklch(0.985, 0, 0),

      // Popover surfaces
      popover: oklch(0.145, 0, 0),
      popoverForeground: oklch(0.985, 0, 0),

      // Primary - Same lime/green
      primary: oklch(0.85, 0.2, 130),
      primaryForeground: oklch(0.2, 0.05, 130),

      // Secondary - Dark gray
      secondary: oklch(0.25, 0, 0),
      secondaryForeground: oklch(0.985, 0, 0),

      // Muted - Dark gray
      muted: oklch(0.25, 0, 0),
      mutedForeground: oklch(0.7, 0, 0),

      // Accent - Same as secondary
      accent: oklch(0.25, 0, 0),
      accentForeground: oklch(0.985, 0, 0),

      // Destructive - Red adjusted for dark mode
      destructive: oklch(0.45, 0.2, 27),
      destructiveForeground: oklch(0.985, 0, 0),

      // Borders and inputs - with alpha transparency
      border: oklch(1, 0, 0, 0.1),
      input: oklch(1, 0, 0, 0.1),
      ring: oklch(0.85, 0.2, 130),

      // Chart colors - Same palette
      chart1: oklch(0.65, 0.19, 150),
      chart2: oklch(0.6, 0.18, 200),
      chart3: oklch(0.55, 0.2, 250),
      chart4: oklch(0.6, 0.22, 300),
      chart5: oklch(0.65, 0.2, 50),

      // Sidebar - dark mode
      sidebarBackground: oklch(0.175, 0, 0),
      sidebarForeground: oklch(0.985, 0, 0),
      sidebarPrimary: oklch(0.85, 0.2, 130),
      sidebarPrimaryForeground: oklch(0.2, 0.05, 130),
      sidebarAccent: oklch(0.25, 0, 0),
      sidebarAccentForeground: oklch(0.985, 0, 0),
      sidebarBorder: oklch(1, 0, 0, 0.1),
      sidebarRing: oklch(0.85, 0.2, 130),
    },

    semantic: {
      // Success - Green
      success: oklch(0.6, 0.18, 145),
      successForeground: oklch(0.985, 0, 0),

      // Warning - Yellow/Orange
      warning: oklch(0.75, 0.18, 80),
      warningForeground: oklch(0.2, 0.05, 80),

      // Info - Blue
      info: oklch(0.6, 0.15, 240),
      infoForeground: oklch(0.985, 0, 0),
    },
  },

  radius: {
    base: 10, // 0.625rem in pixels
    sm: 6, // base - 4px
    md: 8, // base - 2px
    lg: 10, // same as base
    xl: 14, // base + 4px
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64,
  },

  typography: {
    fontFamily: {
      sans: "Noto Sans KR",
      mono: "JetBrains Mono",
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      xl2: 24,
      xl3: 30,
      xl4: 36,
      xl5: 48,
      xl6: 60,
      xl7: 72,
      xl8: 96,
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    lineHeight: {
      xs: 16,
      sm: 20,
      base: 24,
      lg: 28,
      xl: 28,
      xl2: 32,
      xl3: 36,
      xl4: 40,
      xl5: 48,
      xl6: 60,
      xl7: 72,
      xl8: 96,
    },
    letterSpacing: {
      normal: 0,
      tight: -0.5,
      wide: 0.5,
    },
  },

  style: {
    borderWidth: 1,
    disabledOpacity: 0.5,
    hoverDarken: 0.05,
    hoverLighten: 0.075,
  },
} as const;

/**
 * Type exports for consumers
 */
export type {
  ColorScheme,
  DesignTokens,
  OklchColor,
  RadiusTokens,
  SemanticColors,
  SpacingTokens,
  StyleTokens,
  TypographyTokens,
};
