function good(name) {
    console.log("hey " + name + " you are a good developer");
    console.log("hey " + name + " your tshirt is good");
    console.log("hey " + name + " you write good code");
    console.log("hey " + name + " your debuging skill is good");
}
good("rik");
good("SAGNIK");




function sum(a, b, c = 3) {
    // console.log(a+b);
    return a + b + c;
}
result1 = sum(3, 5);
result2 = sum(13, 15, 1);
result3 = sum(34, 54);
console.log("the sum of these numbers is: ", result1);
console.log("the sum of these numbers is: ", result2);
console.log("the sum of these numbers is: ", result3);


//arrow function

const func1 = (x) => {
    console.log("i am an arrow function", x);
}

func1(34);
func1(65);
func1(78);