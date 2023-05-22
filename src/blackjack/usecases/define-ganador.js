export const defineGanador = (puntosMinimos, cpuPuntos, divGanador) => {
  setTimeout(() => {
    let ganador = "GANO ";
    if (puntosMinimos == cpuPuntos) {
      ganador = "EMPATE";
    } else if (puntosMinimos > 21) {
      ganador += "LA CPU";
    } else if (cpuPuntos > 21) {
      ganador += "EL JUGADOR";
    } else {
      ganador += "LA CPU";
    }

    divGanador.innerText = ganador + "!!!";
  }, 10);
};
