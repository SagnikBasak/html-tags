console.log("hey this is tutorial 55");
var a = 5;
var b = 6;
var c = "Sagnik";

console.log(a + b);
console.log(c);
console.log(typeof a, typeof b, typeof c); //the 'typeof' keyword is to detect the type of variables

// const x = 6;
// x = x+5;
// console.log(x);
//this will not work as the x is defined as constant variable 



//now the difference between let and var is let is a blocked variable it will only work under a blocked statement
//and var is a global variable it will work anywhere is the code like

{
    let a = 1;
    console.log(a);
    //if a let variable with the same name is not defined in the block it will look for the global variables.
}
console.log(a);

//DATA TYPES IN JAVASCRIPT - 1.Primitive 2.Object

let x = "Sagnik bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    name: "sagnik",
    "job code": "5600",
    is_handsome: true
    //the name is the key and the sagnik is the value
    //when declearing the name if it contains any spaces then we have to use double coute ""
}
console.log(o);
o.salary = "1 lakh"; //to add something to the object we can write this
console.log(o);
o.salary = "5 lakh";
console.log(o);