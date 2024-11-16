

function toCapitalize(words) {
    let pattern = { "a": "A", "b": "B", "c": "C", "d": "D", "e": "E", "f": "F", "g": "G", "h": "H", "i": "I", "j": "J", "k": "K", "l": "L", "m": "M", "n": "N", "o": "O", "p": "P", "q": "Q", "r": "R", "s": "S", "t": "T", "u": "U", "v": "V", "w": "W", "x": "X", "y": "Y", "z": "Z" };
    let newWords = "";
    let aux = 0;

    for (let letter = 0; letter < words.length; letter++) {
       if(words[letter] == " "){
            aux = letter+1;
            newWords  += " "+pattern[words[letter+1]]
        }else if(letter == 0){
            newWords  += pattern[words[0]]
        }else if(aux != letter){
            newWords += words[letter]
        }
       
    }

    return newWords;
}

// código de prueba
console.log(toCapitalize("hola mundo")) // "Hola Mundo"
console.log(toCapitalize("make it real")) // "Make It Real"
console.log(toCapitalize("Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor")) // ""