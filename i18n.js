import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'es', // Establece el idioma predeterminado
  messages: {
    es: {
      // Definir mensajes en español
    },
    en: {
      // Definir mensajes en inglés
    },
  },
});

export default i18n;