const palindromes = function (phrase) {
    
    
};

function preparation(phrase){
    noPunct = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    noSpaces = noPunct.replaceAll(' ','');
    prepdPhrase = noSpaces.toLowerCase();

}
 
// Do not edit below this line
module.exports = palindromes;
