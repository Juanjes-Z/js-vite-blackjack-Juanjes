import _ from "underscore";
import {
  createDeck,
  askForCard,
  createNewCard,
  turnoCpu,
  acumulaPuntos,
} from "./usecases";

const blackJackModulo = (() => {
  "use strict";

  const tipos = ["C", "D", "H", "S"],
    tiposEsp = ["A", "J", "Q", "K"];

  // let cpuPuntos = 0,
  //   jugadorPuntos = 0,

  let puntosJugadores = [],
    deck = [];

  // referencia HTML
  const btnPedir = document.getElementById("btnPedir");
  const btnDetener = document.getElementById("btnDetener");
  const btnNuevo = document.getElementById("btnNuevo");

  const smalls = document.querySelectorAll("small"),
    divGanador = document.getElementById("ganador"),
    divCartasJugadores = document.querySelectorAll(".divCartasJugadores");

  //Inizializa el juego
  const inicializaJuego = (numJugadores = 2) => {
    nuevoJuego();
    deck = createDeck(tipos, tiposEsp);
    console.log(deck);
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
  };

  const nuevoJuego = () => {
    deck = [];
    puntosJugadores = [];
    smalls.forEach((small) => (small.innerText = "0"));
    divCartasJugadores.forEach(
      (divCartaJugador) => (divCartaJugador.innerHTML = "")
    );
    divGanador.innerText = "";
    btnDetener.disabled = false;
    btnPedir.disabled = false;
  };

  //eventos
  btnPedir.addEventListener("click", () => {
    const carta = askForCard(deck);
    acumulaPuntos(carta, 0, puntosJugadores, smalls);
    createNewCard(carta, 0, divCartasJugadores);

    if (puntosJugadores[0] > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoCpu(
        puntosJugadores[0],
        divGanador,
        puntosJugadores,
        deck,
        smalls,
        divCartasJugadores
      );
    } else if (puntosJugadores[0] == 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoCpu(
        puntosJugadores[0],
        divGanador,
        puntosJugadores,
        deck,
        smalls,
        divCartasJugadores
      );
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoCpu(
      puntosJugadores[0],
      divGanador,
      puntosJugadores,
      deck,
      smalls,
      divCartasJugadores
    );
  });

  btnNuevo.addEventListener("click", () => {
    inicializaJuego();
  });

  return {
    inicializaJuego,
  };
})();
