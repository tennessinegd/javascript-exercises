const palindromes = function (string) {
    // remove any spaces or punctuation from the string
    let stringFormatted = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    stringFormatted = stringFormatted.toLowerCase();

    // split the string and reverse it
    let stringReversed = stringFormatted.split("");
    stringReversed.reverse();
    stringReversed = stringReversed.join("");
    
    // compare string and its reversed version
    if (stringFormatted === stringReversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
