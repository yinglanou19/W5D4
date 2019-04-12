function fibonacci(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    return (fibonacci(n-1) + fibonacci(n-2));
}


// fibonacci(7);
// fibonacci(15);

function fib(n) {
    if (n=== 1) {
        return [1];
    }
    if (n===2){
        return [1,1];
    }
    let res = fib(n-1);  // [1,1] << 2
    res.push(res[n-2]+res[n-3]);
    return res;
}

fib(5);