/**
 *
 * @param {String} carta Carta seleccionada del deck
 * @returns  {Number} valor de la carta
 */
export const getCardValue = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
