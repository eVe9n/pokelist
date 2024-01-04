import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Establece el idioma predeterminado
  messages: {
    es: {
      // Definir mensajes en español
      title: "Poke Lista",
      subtitle: "Este poke es ",
      abilities: "Habilidades",
      held: "Objetos retenidos",
      moves: "Movimientos"
    },
    en: {
      // Definir mensajes en inglés
      title: "Poke List",
      subtitle: "This poke is ",
      abilities: "Abilities",
      held: "Held items",
      moves: "Moves"
    },
  },
});

export default i18n;