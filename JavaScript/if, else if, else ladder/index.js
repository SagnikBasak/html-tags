console.log("Hello i am conditional tutorial");

let age = 3;
let grace = 2;

age += grace;
console.log(age); //this is a increament operator that means age = age + grace

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace); //the ** means (exponantion) age top the power of grace that is 3^2 = 9
console.log(age % grace); //the % is modulus poerator that is the remainder in deviding the 3/2 that is 1

if (age > 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding !!!!!!");
}
else if (age == 1) {
    console.log("Are you again kidding !!!!!!");
}

else {
    console.log("you can't drive");
}

// the === sign compaires the value and type both


let x = 6;
let y = 8;
let z = x > y ? (x - y) : (y - x);
console.log(z);

/*
    translation of z = x > y ? (x - y) : (y - x);
    if (x > y){
        z = x - y;
        console.log(z);
    }
    else{
        z = y - x;
        console.log(z);
    }
*/
