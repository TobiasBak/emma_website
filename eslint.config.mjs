import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

export default [
  // Global config
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
  {
    files: ["**/*.astro", "**/*.js", "**/*.mjs", "**/*.ts", "**/*.tsx"],
    plugins: {
      'jsx-a11y': jsxA11y
    },
    rules: {
      // Accessibility rules
      ...jsxA11y.configs.recommended.rules,
    }
  },
  // TypeScript config
  ...tseslint.configs.recommended,
  // Astro-specific config
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
      files: ["**/*.astro"],
      languageOptions: {
          parser: eslintPluginAstro.parser,
          parserOptions: {
              parser: tseslint.parser,
              extraFileExtensions: [".astro"],
          },
      },
  }
];
