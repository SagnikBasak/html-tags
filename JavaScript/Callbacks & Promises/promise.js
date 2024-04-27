console.log('this is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Random numbers are not supporting you...")
    }

    else {
        setTimeout(() => {
            resolve("yes i have resolved");
        }, 2000);
    }
})

prom1.then((a) => {
    console.log(a);
}).catch((err)=>{
    console.log(err)
})