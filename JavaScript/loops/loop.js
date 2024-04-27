console.log("I am a tutorial for loops");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let obj = {
    name: "Sagnik",
    role: "Developer",
    comapny: "Xyz"
};

for (const key in obj) {
    const element = obj[key];
    console.log(key,":",element);
}

for (const iterator of "Sagnik") {
    console.log(iterator);
}

let i=5;
while (i<6) {
    console.log(i);
    i++;
}


let z=0;
do {
    console.log(z);
    z++;
} while (z<6);