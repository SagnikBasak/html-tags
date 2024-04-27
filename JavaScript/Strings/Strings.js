console.log("this is a tutorial on strings");

let a = "sagnik";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);//not available showing undefined
console.log(a.length);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let my_name = "sagnik";
let friend = "rohan";

console.log("my name is " + my_name + " and my friend name is " + friend);
console.log(`my name is ${my_name} and my friend name is ${friend}`);


let b = "      SubHam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1, 4));
console.log(b.slice(1));
console.log(b.replace("Su", "77"));
console.log(b.concat(a, "basak"));
let x = b.concat(a, "basak");
console.log(x);
console.log(x.trim());