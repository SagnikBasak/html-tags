console.log("Sagnik");


//we can do this 
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[3].style.backgroundColor = "violet";


//Also we can do this by id
document.getElementById("red").style.backgroundColor = "red";

// Also we can do this by query selector
document.querySelector(".box").style.backgroundColor = "green" //this only works on the first div that named with box
console.log(document.querySelectorAll(".box")); //this returns all the html collection whose name is box


document.querySelectorAll(".box").forEach(element => {
    console.log(element)
    element.style.backgroundColor = "blue"
});

document.getElementsByTagName("div"); //this returns a collection of all the div's including parents and siblings
