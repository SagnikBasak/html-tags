// let obj = {
//     a: 1,
//     b: "Sagnik"
// }
// console.log(obj);


// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;


class Animal {
    constructor(animalName) {
        this.name = animalName;
        console.log('object is created...');
    }
    eats() {
        console.log('kha raha hoon');
    }
    jumps() {
        console.log('kood raha hoon');
    }
}
class Lion extends Animal {
    constructor(animalName) {
        super(animalName);
        console.log('object is created and he is a lion...');
    }
    eats() {
        super.eats();
        console.log('kha raha hoon par chicken');
    }
}

let a = new Animal("Bunny");
console.log(a);
let l = new Lion("Sheru");
console.log(l);
