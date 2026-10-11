import { defineConfig, globalIgnores } from 'eslint/config';
import babelParser from '@babel/eslint-parser';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  globalIgnores(['.next/**', '.next-feature-matrix/**', 'node_modules/**', '_source/**', 'private/**', 'next-env.d.ts',
    'playwright-report/**', 'test-results/**']),
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    // Babel parses TS syntax without a TS compiler API. Strict typing and general
    // unused-variable checks are provided independently by tsc and Biome.
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false, configFile: false,
          parserOpts: { plugins: ['typescript', 'jsx'] },
        },
      },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-eval': 'error', 'no-implied-eval': 'error', 'no-new-func': 'error',
      'no-debugger': 'error', 'no-script-url': 'error',
    },
  },
]);
