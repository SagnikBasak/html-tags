let a = prompt("enter first number");
let b = prompt("enter second number");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")  //this will stop the code for further execution
}
let sum = parseInt(a) + parseInt(b);
function main() {
    let x = 1;
    try {
        console.log("the sum is : ", sum * x);
        return true;
    } catch (error) {
        console.log('error a gaya bhai');    //this will show a error but run the code
        return false;
    }

    finally {
        console.log('files and db connection is being closed'); 
        //this is mainly used for functions where return statement is used
        //when we simply write this without finally after return value the code will not work
        //but when we use finally the code will work even after return statement 
    }
}


let c = main();
console.log(c);
