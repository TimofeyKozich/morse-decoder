const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = '';
    for (let i = 0; i < expr.length; i += 10){

        let letter = expr.slice(i, i + 10);
        if (expr[i] === '*'){
            answer += ' ';
        } else{
            let morseLetter = '';
            for (let j = 0; j < letter.length; j += 2){
                if (letter[j] === '1' && letter[j + 1] === '0'){
                    morseLetter += '.';
                }
                if (letter[j] === '1' && letter[j + 1] === '1'){
                    morseLetter += '-';
                }
            }
            answer += MORSE_TABLE[morseLetter];
        }
    }
    return answer;
}

module.exports = {
    decode
}