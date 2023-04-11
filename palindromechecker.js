function palindrome(str) {
    var cleanUpStr = str.toLowerCase().match(/[a-z0-9]+/gi).join('');
    var totalLength = cleanUpStr.length;
    var length = Math.floor(totalLength / 2);

    for (var i = 0; i < length; i++) {
        if (cleanUpStr[i] !== cleanUpStr[totalLength - i - 1])
            return false;
    }

    return true;
}

console.log(palindrome('A man, a plan, a canal. Panama'));