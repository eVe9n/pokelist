module.exports = {
  // Usa el entorno de Vue.js
  env: {
    browser: true,
    node: true,
  },
  // Extiende la configuración recomendada de ESLint para Vue
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  // Agrega reglas personalizadas si es necesario
  rules: {
    // Tus reglas personalizadas aquí
  },
  // Configuración específica para plugins
  plugins: ['vue', '@typescript-eslint'],
  // Agrega ajustes para procesadores de archivos
  settings: {
    vue: {
      version: '3', // Usa Vue 3
    },
  },
  // Reglas y configuración para TypeScript (si lo estás utilizando)
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
