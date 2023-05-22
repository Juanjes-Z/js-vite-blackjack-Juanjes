/**
 *
 * @param {Array<String>} deck Necesita el deck de cartas
 * @returns {String} regresa la ultima carta del deck
 */
export const askForCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas disponibles";
  }
  return deck.pop();
};
