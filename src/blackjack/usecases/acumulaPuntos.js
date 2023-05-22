import { getCardValue } from "./";

export const acumulaPuntos = (carta, turno, puntosJugadores, smalls) => {
  puntosJugadores[turno] += getCardValue(carta);
  smalls[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
