let testArray;
let toBeRemoved;

const removeFromArray = function(testArray, toBeRemoved) {

    indexToBeRemoved = testArray.indexOf(toBeRemoved);
    if (indexToBeRemoved > -1){
        return testArray.splice(indexToBeRemoved,1);
        console.log(testArray);
    }

};

// Do not edit below this line
module.exports = removeFromArray;
