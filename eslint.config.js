import js from '@eslint/js';

export default [
  {
    ignores: [
      'node_modules/**',
      '_site/**',
      '.eleventy.js',
      'postcss.config.js',
      'tailwind.config.js',
      'playwright.config.ts',
      'sanity-studio/**',
    ],
  },
  {
    files: ['src/**/*.{js,mjs}', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        // Browser globals
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off',
    },
  },
];
