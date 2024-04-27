async function getData() {
    //simulation of getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
}

console.log('Loading modules...');

console.log('Loading data...');

async function main() {

    let data = await getData();

    console.log('Processing data...');
}

main();