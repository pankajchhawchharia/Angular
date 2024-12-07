// waf to swap 2 numbers
function swap(a,b) {
    console.log("numbers to swap : ",`${a} ${b}`);
    let t;
    t=a;
    a=b;
    b=t;
    return `${a} ${b}`
}
console.log("after swap 2 number : ",swap(2,3));
