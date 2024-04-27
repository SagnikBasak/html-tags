let button = document.getElementById("btn");

button.addEventListener("click", () => {
    // alert("i was clicked");
    document.querySelector(".box").innerHTML = "I am sagnik"
})

document.addEventListener("keydown" , (e)=>{
    console.log(e.key, e.keyCode);
})
