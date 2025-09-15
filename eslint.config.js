// @ts-check
import convex from "@convex-dev/eslint-plugin";
import js from "@eslint/js";
import tanStackRouter from "@tanstack/eslint-plugin-router";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/", "convex/_generated/", "routeTree.gen.ts"]),
  {
    name: "js/recommended",
    ...js.configs.recommended
  },
  tseslint.configs.recommendedTypeChecked,
  {
    name: "allow-tanstack-router-throw-redirect",
    rules: {
      "@typescript-eslint/only-throw-error": [
        "error",
        {
          allow: [
            {
              from: "package",
              package: "@tanstack/router-core",
              name: "Redirect"
            }
          ]
        }
      ]
    }
  },
  {
    name: "language-options",
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  ...tanStackRouter.configs["flat/recommended"],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  ...convex.configs.recommended,
  {
    name: "prettier",
    ...prettier
  }
]);
