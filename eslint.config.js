import eslint from "@eslint/js";

const config = [
  {
    ignores: [".astro/**", "node_modules/**", "dist/**"],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
    rules: {
      "linebreak-style": ["error", "unix"],
    },
  },
];

export default config;
