import { pedirCarta, valorCarta, crearCarta } from "./";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos que la computadora necesita para ganar
 * @param {Array<String>} deck Array de Strings
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora contenedor de las cartas de la computadora
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error('puntosMinimos son necesario');
    if (!puntosHTML) throw new Error('puntosHTML es necesario');
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        crearCarta(carta, divCartasComputadora);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}