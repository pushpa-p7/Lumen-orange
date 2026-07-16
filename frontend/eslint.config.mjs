import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Project-specific ignore patterns.
  // Keeps generated files out of the linting process.
  globalIgnores([
    // Next.js generated files
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Package manager & deployment artifacts
    "coverage/**",
    "dist/**",
  ]),
]);

export default eslintConfig;
