const palindromes = function (phrase) {
    
    const preppedString = phrase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");

    return (
        preppedString
            .split("")
            .reverse()
            .join("") == preppedString
    );

    // preparation(phrase);

    // let phraseAry = Array.from(prepdPhrase);
    // let revAry = phraseAry.reverse();
    // let phraseRev = revAry.toString();
    
    // return (prepdPhrase == phraseRev) ? true:false;
};  

// function preparation(phrase){
//     noPunct = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//     noSpaces = noPunct.replaceAll(' ','');
//     return prepdPhrase = noSpaces.toLowerCase();

// }

// Do not edit below this line
module.exports = palindromes;
