// fibonacci series till the number of terms
function fibonaci(num) {
    let fib = [];
    if(num<=0) {
        return `${fib} number of terms: ${num}`;
    }
    if(num === 1) {
        return `${0} number of terms: ${num}`;
    }
    fib = [0,1];
    for (let i=2;i<num;i++) {
        let nextTerm = fib[i-1] + fib[i-2];
        fib.push(nextTerm);
    }
    return `${fib} number of terms: ${num}`;
}
console.log("fibonacci series: ",fibonaci(1));
