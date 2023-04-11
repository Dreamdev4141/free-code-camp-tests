/**
 * 
 * Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher, 
 * also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
 * Thus A ↔ N, B ↔ O and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
 * but do pass them on.
 * 
 */

function rot13(str) {
    var length = str.length;

    var result = [];
    for (var i = 0; i < length; i++) {
        var charCode = str.charCodeAt(i);
        if (str[i] >= 'A' && str[i] <= 'Z') {
            var cryptedCharCode = (charCode + 13)
            var zCharCode = 'Z'.charCodeAt(0);
            var aCharCode = 'A'.charCodeAt(0);
            result.push(cryptedCharCode > zCharCode ? aCharCode + cryptedCharCode - zCharCode - 1 : cryptedCharCode);
        } else {
            result.push(charCode);
        }
    }

    return String.fromCharCode(...result);
}

console.log(rot13("SERR PBQR PNZC"));