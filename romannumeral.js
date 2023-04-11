/**
 * 
 * Roman Numeral Converter
 * Convert the given number into a roman numeral.
 * 
 * Roman numerals	Arabic numerals
 * M	1000
 * CM	900
 * D	500
 * CD	400
 * C	100
 * XC	90
 * L	50
 * XL	40
 * X	10
 * IX	9
 * V	5
 * IV	4
 * I	1
 * All roman numerals answers should be provided in upper-case.
 * 
 * convertToRoman(2) should return the string II.
 * convertToRoman(3) should return the string III.
 * convertToRoman(4) should return the string IV.
 * convertToRoman(5) should return the string V.
 * convertToRoman(9) should return the string IX.
 * convertToRoman(12) should return the string XII.
 * convertToRoman(16) should return the string XVI.
 * convertToRoman(29) should return the string XXIX.
 * convertToRoman(44) should return the string XLIV.
 * convertToRoman(45) should return the string XLV.
 * convertToRoman(68) should return the string LXVIII
 * convertToRoman(83) should return the string LXXXIII
 * convertToRoman(97) should return the string XCVII
 * convertToRoman(99) should return the string XCIX
 * convertToRoman(400) should return the string CD
 * convertToRoman(500) should return the string D
 * convertToRoman(501) should return the string DI
 * convertToRoman(649) should return the string DCXLIX
 * convertToRoman(798) should return the string DCCXCVIII
 * convertToRoman(891) should return the string DCCCXCI
 * convertToRoman(1000) should return the string M
 * convertToRoman(1004) should return the string MIV
 * convertToRoman(1006) should return the string MVI
 * convertToRoman(1023) should return the string MXXIII
 * convertToRoman(2014) should return the string MMXIV
 * convertToRoman(3999) should return the string MMMCMXCIX
 * 
 */

function convertToRoman(num) {
    var i = 0;

    var romanLetters = [
        ['I', 'V', 'X'],
        ['X', 'L', 'C'],
        ['C', 'D', 'M'],
        ['M']
    ];

    var result = '';

    while (num != 0) {
        const x = num % 10;
        num = (num - x) / 10;

        var letterSet = romanLetters[i];
        var string = ''

        if (i < 3) {
            if (x < 4) {
                string = letterSet[0].repeat(x);
            } else if (x == 4) {
                string = letterSet[0] + letterSet[1];
            } else if (x < 9) {
                string = letterSet[1] + letterSet[0].repeat(x % 5);
            } else {
                string = letterSet[0] + letterSet[2];
            }
        } else {
            string = letterSet[0].repeat(x);
        }

        result = string + result;

        i++;
    }

    return result;
}

console.log(convertToRoman(891));