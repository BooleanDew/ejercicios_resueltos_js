/*

Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// escribe tu función acá

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""


big O(1)
*/

function toCapitalize(words) {
    // return palabra.replace(palabra.charAt(0),palabra.charAt(0).toUpperCase());
    let pattern = { "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J", "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T", "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z" };
    let newWords = "";
    
    for (let letter = 0; letter < words.length; letter++) {
        if (letter > 0) {
            pattern[words[0]] += words[letter]
        }
        newWords = pattern[words[0]]
    }

    return newWords;
}



// código de prueba
console.log(toCapitalize("pedro")) // "Pedro"
console.log(toCapitalize("hola mundo")) // "Hola mundo"
console.log(toCapitalize("")) // ""
