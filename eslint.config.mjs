import js from '@eslint/js';
import globals from 'globals';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import unicorn from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,

  // Конфигурация для Next.js (App Router)
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
    },
  },

  // TypeScript-файлы
  {
    ...reactRecommended,
    ...jsxRuntime,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        React: "readonly", // Разрешаем использовать React без импорта
        JSX: "readonly",  // Если используется TSX
      },
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname, // Для корректного пути к tsconfig.json
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // JavaScript-файлы
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node, // Если есть серверный код
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Общие правила
  {
    plugins: {
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptPlugin,
      unicorn,
      prettier: prettierPlugin,
    },
    rules: {
      // React & Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error', // Обязательно для Next.js

      // Unicorn
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['\\.(test|spec)\\.(js|jsx|ts|tsx)$', '^[A-Z]+\\.(js|jsx|ts|tsx)$'],
        },
      ],

      // Code style (выключено, так как Prettier управляет этим)
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',

      // Безопасность
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
    },
  },

  // Игнорируемые файлы
  {
    ignores: ['.prettierrc.js', '**/*.config.js', '**/*.config.mjs', '.next/**', 'node_modules/**', 'dist/**'],
  },
];
