async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

console.log('Loading modules...');

console.log('Loading data...');

async function main() {

    let data = await getData();

    console.log(data);
    console.log('Processing data...');
}

main();






//this is another way to execute the code
// data.then(() => {
//     console.log(data);
//     console.log('Process data...');
//     console.log('Task 2');
// })