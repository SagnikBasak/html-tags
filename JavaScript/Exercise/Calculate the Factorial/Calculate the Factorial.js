let a = 6;

function factorial(num) {
    let arr = Array.from(Array(num + 1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    console.log(c);
}

function faqFor(num) {
    let fac = 1;
    for (let index = 1; index <= num; index++) {
        fac = fac * index;

    }
    return fac;
}

factorial(a);
console.log("The faqFor is ",faqFor(a));