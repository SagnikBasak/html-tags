let a = [1, 93, 5, 6, 88];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value, index, arr) => {
    console.log(value, index, arr)
});


let obj = {
    a: 11,
    b: 22,
    c: 33,
    d: 44,
    e: 55
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

for (const iterator of a) {
    console.log(iterator);
}

console.log(Array.from("Sagnik"));