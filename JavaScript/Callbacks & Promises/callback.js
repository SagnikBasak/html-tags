console.log("Sagnik is a hacker")
console.log("Raaj is a hacker")


setTimeout(() => {
    console.log("i am inside setTimeout")
}, 2000);

console.log("The End");




const fn = () => {
    console.log("this is another function")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onLoad = callback("Sagnik", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);