let userString //= prompt("Please enter a single word or a phrase, I'll reverse it");

const reverseString = function(userString) {
    
    let strArray = userString.split("");

    strArray.reverse();
    
    return strArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
