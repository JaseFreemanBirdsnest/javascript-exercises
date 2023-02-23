const fibonacci = function fib(n) {

    if (n < 0) {
        return "OOPS";
    }

     if (n < 3) {
        return 1;
    }

    return fib(n-1) + fib(n-2);
 



    
};

// Do not edit below this line
module.exports = fibonacci;
