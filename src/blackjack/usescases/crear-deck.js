import _ from 'underscore';


/**
 * Esta función Crea un deck
 * @function 
 * @param {Array<String>} tipoDeCartas - Ejemplo - ['C', 'D', 'H', 'S'];
 * @param {Array<String>} tiposEspeciales - Ejemplo - ['A', 'J', 'Q', 'K'];
 * @return {Array<String>} retorna un arreglo
 */

export const crearDeck = (tipoDeCartas, tiposEspeciales) => {
    if (!tipoDeCartas || tipoDeCartas.length === 0) throw new Error('Tipos de cartas obligatorio como un arreglo de strings');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de strings');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipoDeCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipoDeCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}
