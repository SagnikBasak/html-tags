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

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Random numbers are not supporting you...2")
    }

    else {
        setTimeout(() => {
            resolve("yes i have resolved...2");
        }, 2000);
    }
})

let p3 = Promise.all([prom1,prom2])
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
})