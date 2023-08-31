
/**
 * Crea las cartas en el div 
 * @param {String} carta la carta 
 * @param {HTMLElement} divContendor div donde se almacenan las cartas 
 */

export const crearCarta = (carta, divContendor) => {

    if (!carta && !divContendor) throw new Error('La carta y el contenedor son obligatorios');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divContendor.append(imgCarta);
}