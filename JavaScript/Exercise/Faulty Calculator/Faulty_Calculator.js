console.log("this is a faulty calculator");

// let random = Math.floor(Math.random() * 11);
let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    //perform correct operation
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    //perform wrong operation
    c= obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
