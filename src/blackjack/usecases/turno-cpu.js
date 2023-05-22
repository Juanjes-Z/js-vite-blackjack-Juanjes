import { askForCard, defineGanador, createNewCard, acumulaPuntos } from ".";

export const turnoCpu = (
  puntosMinimos,
  divGanador,
  puntosJugadores,
  deck,
  smalls,
  divCartasJugadores
) => {
  let cpuPuntos = 0;
  do {
    const carta = askForCard(deck);
    cpuPuntos = acumulaPuntos(
      carta,
      puntosJugadores.length - 1,
      puntosJugadores,
      smalls
    );
    createNewCard(carta, puntosJugadores.length - 1, divCartasJugadores);
    if (puntosMinimos > 21) {
      break;
    }
  } while (cpuPuntos < puntosMinimos && puntosMinimos <= 21);
  defineGanador(puntosMinimos, cpuPuntos, divGanador);
};
