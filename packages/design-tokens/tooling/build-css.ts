import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { kebabCase } from "es-toolkit";
import { tokens, type ColorScheme, type OklchColor } from "../src/tokens.js";
import { oklchToCss } from "./oklch-to-p3.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../../../apps/web/src/app/[locale]/tokens.css");

function generateColorVariables(colors: ColorScheme, indent = "  "): string {
  return Object.entries(colors)
    .map(([key, color]) => {
      const cssVar = kebabCase(key);
      const cssValue = oklchToCss(color as OklchColor);
      return `${indent}--${cssVar}: ${cssValue};`;
    })
    .join("\n");
}

function generateCss(): string {
  return `:root {
  --radius: ${tokens.radius.base / 16}rem;

${generateColorVariables(tokens.colors.light)}
}

.dark {
${generateColorVariables(tokens.colors.dark)}
}
`;
}

function main(): void {
  console.log("📝 Generating CSS tokens...");

  const css = generateCss();

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, css);

  console.log(`✅ CSS tokens written to: ${OUTPUT_PATH}`);
}

main();
