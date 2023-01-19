const sumAll = function(firstNum, lastNum) {

    if (firstNum > lastNum){
        let a = firstNum;
        let b = lastNum;
        firstNum = b;
        lastNum = a;
    }

    if (firstNum < 0 || lastNum < 0){
        return "ERROR";
    }

    
    if (typeof firstNum !== "number" || typeof lastNum !== "number" ){
        return "ERROR";
    }

    const numArray = [];
    let i = firstNum;

    while (i <= lastNum){
        numArray.push(i);
        i++;
    }

   return  total = numArray.reduce((acc, cV) => acc + cV, 0);

};


// Do not edit below this line
module.exports = sumAll;
