import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/ios/',
      '**/android/',
      '**/*.config.js',
      '**/no',
      '**/node_modules',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      '@react-native-community',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key]) => [key, 'off']),
        ),
        ...globals.node,
        ...globals.jest,
        ...reactNative.environments['react-native']['react-native'],
      },

      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'always'],
      'prefer-const': 'error',
      'no-console': 'error',
      'no-unused-vars': 'error',
      'prettier/prettier': 'error',
      'prefer-arrow-callback': 'warn',

      'react-native/no-inline-styles': 'error',
      'react-native/no-unused-styles': 'error',
      'react-native/no-raw-text': 2,
      'react-native/no-single-element-style-arrays': 2,

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'eol-last': ['error', 'always'],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],

      indent: 'off',

      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowFunctions: true,
          allowBind: false,
        },
      ],
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          allowMultiline: true,
          children: true,
        },
      ],

      'react/display-name': 'off',
      'react/prop-types': 'off',
    },
  },
];
