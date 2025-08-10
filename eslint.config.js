import eslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: eslint.configs.recommended,
});

const config = [
  ...compat.config({
    extends: ["eslint:recommended", "next", "next/core-web-vitals"],
  }),
  {
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
    rules: {
      "react/display-name": 0,
      "@next/next/no-img-element": 0,
      "import/no-unresolved": 2,
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "import/newline-after-import": 1,
      "import/no-useless-path-segments": ["warn", { noUselessIndex: true }],
      "import/no-unassigned-import": 2,
    },
    ignores: [".next/", "node_modules/"],
  },
];

export default config;
