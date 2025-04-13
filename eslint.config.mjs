import js from '@eslint/js';
import globals from 'globals';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import unicorn from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    ...reactRecommended,
    ...jsxRuntime,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    // Правило для имен файлов в kebab-case
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase', // Требует kebab-case (например, `my-component.jsx`)
          ignore: [
            '\\.(test|spec)\\.(js|jsx)$', // Игнорировать тестовые файлы
            '^[A-Z]+\\.(js|jsx)$', // Разрешить UPPER_CASE (например, `CONSTANTS.js`)
          ],
        },
      ],
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Включить Prettier как правило ESLint
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
];
