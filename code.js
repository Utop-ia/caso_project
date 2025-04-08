export const configurazione = {
  testo: "CASO",
  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",
  mostraTestoSotto: true,
  mostraTestoSopra: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza
 * @property {number} unita - Unita' di misura di riferimento
 * @property {number} volume - Il volume del microfono
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation)
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt)
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt)
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  ellipse(x, y, 150, 150);
  noFill();
  stroke("red");
}

//

export function caricamentoRisorse() {}

export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background(255);

  // fill("deeppink");
  // disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  //   stroke("white");
  //   noFill();
  //   disegnaTesto();
}
