
/**
 * 
 * @param {Array<String>} deck es un arrregle de string
 * @returns {String}returna la ultima carta del array 
 */
export const pedirCarta = (deck) => {

    if ( !deck||deck.length === 0) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}