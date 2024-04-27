console.log("Script.js initializing...");

document.querySelector(".box").innerHTML
document.querySelector(".box").innerText
document.querySelector(".container").outerHTML
// document.querySelector(".box").hidden = true
document.querySelector(".box").innerHTML = "i am sagnik" //changes the inner html
document.querySelector(".box").hasAttribute("style") //does it have a style then returns true or false
document.querySelector(".box").getAttribute("style") //does it have a style then shows the style
document.querySelector(".box").setAttribute("style", "height: 50px") //changes the style
document.querySelector(".box").removeAttribute("style") //remove the style attribute the style
document.querySelector(".box").attributes //shows all the attributes
document.querySelector(".box").dataset //shows the data attribute

/*
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
div1.innerHTML = "I have been inserted <b>Div 1</b>";
div2.innerHTML = "I have been inserted <b>Div 2</b>";
div3.innerHTML = "I have been inserted <b>Div 3</b>";
div4.innerHTML = "I have been inserted <b>Div 4</b>";
div1.setAttribute("class", "created");
div2.setAttribute("class", "created");
div3.setAttribute("class", "created");
div4.setAttribute("class", "created");
document.querySelector(".container").append(div1); //insert in the last of the container
document.querySelector(".container").prepend(div2); //insert in the first of the container
document.querySelector(".container").before(div3); //insert before container
document.querySelector(".container").after(div4); //insert after container
*/

let cont = document.querySelector(".container")
cont.insertAdjacentElement("afterend", document.createElement("div"))
document.querySelector(".container").classList.add("red") // to add the red class in the div
document.querySelector(".container").classList.remove("red") // to remove the red class in the div
