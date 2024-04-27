async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
//IIFE immediately-invoked function expression
//we dont have to call it it will automaticaly executable
(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})()


//this is destructuring
function sum(a, b, c) {
    return a + b + c;
}

let arr=[1,4,6]
console.log(arr[0]+arr[1]+arr[2]);
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr)); //this is spread operator

let [x, y, ...rest] = [1, 5, 7, 4, 8]
console.log(x, y, rest)

let obj = {
    a: 11,
    b: 22,
    c: 33,
    d: 44,
    e: 55
}

let { a, b } = obj;
console.log(a, b);

