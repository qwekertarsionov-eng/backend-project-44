// eslint.config.mjs
import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  // 1. Включаем базовые рекомендованные стили от авторов плагина
  stylistic.configs.recommended,

  // 2. Блок вашей индивидуальной настройки стилей
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Настройка отступов под ваш код
      '@stylistic/indent': ['error', 2, {
        // Автоматически выравнивает тернарные выражения, как в вашем примере
        offsetTernaryExpressions: true,
        // Корректно обрабатывает отступы при объявлении переменных
        VariableDeclarator: 1,
        // Корректно обрабатывает внешние конструкции
        outerIIFEBody: 1,
      }],

      // Использование одинарных кавычек (вместо двойных)
      '@stylistic/quotes': ['error', 'single'],

      // Точки с запятой: запретить ('never') или требовать ('always')
      '@stylistic/semi': ['error', 'never'],

      // Требовать пробел перед открывающей фигурной скобкой функции
      '@stylistic/space-before-blocks': ['error', 'always'],

      // Запретить лишние пробелы в конце строк
      '@stylistic/no-trailing-spaces': 'error',

      // Требовать пустую строку в конце файла
      '@stylistic/eol-last': ['error', 'always'],
    },
  },

  // 3. Базовые настройки для JavaScript и Node.js
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
])
