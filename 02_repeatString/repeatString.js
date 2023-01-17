let str = "hey";
let num = 3;

const repeatString = function(str, num) {
    let i = 0;
    let rtnStr = [];

    if (num < 0){
        return "ERROR";
    }

    while (i < num){
        rtnStr.push(str);
        i++;
    }
    
    return rtnStr.join("");

};

// Do not edit below this line
module.exports = repeatString;
