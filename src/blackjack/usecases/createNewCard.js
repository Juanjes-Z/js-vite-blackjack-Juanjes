/**
 *
 * @param {String} carta
 * @param {number} turno
 * @param {Array} divCartasJugadores Array de Divs de jugadores
 */
export const createNewCard = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  console.log(turno);
  console.log(divCartasJugadores);
  divCartasJugadores[turno].append(imgCarta);
};
