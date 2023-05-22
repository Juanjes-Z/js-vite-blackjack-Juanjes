import _ from "underscore";

/**
 * crea un nuevo y mezcla un deck
 * @param {Array<String>} typeCards Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} typeCardsEspecials Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array} Regresa un nuevo deck
 */
export const createDeck = (typeCards, typeCardsEspecials) => {
  if (!typeCards || typeCards.length === 0)
    throw new "Error se espera los tipos de cartas"();
  if (!typeCardsEspecials || typeCardsEspecials.length === 0)
    throw new "Error se espera los tipos especiales de cartas"();
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of typeCards) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of typeCards) {
    for (let tipoEsp of typeCardsEspecials) {
      deck.push(tipoEsp + tipo);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
