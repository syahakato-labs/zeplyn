import globals from 'globals';
import * as base from './base.js';
import { IGNORE_BASE } from './constants/common.js';
import { configs } from './eslint-config.js';

/**
 * @type {import('eslint').Linter.Config[]}
 */
export const config = [
  { ignores: [...IGNORE_BASE, 'eslint.config.mjs'] },
  ...base.config,
  ...configs.recommended['ts-type-check'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'turbo/no-undeclared-env-vars': ['warn', { allowList: [] }],
    },
  },
];
