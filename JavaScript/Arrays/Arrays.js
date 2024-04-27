let arr1 = [1, 2, 3, 4, 5, 7];
console.log(arr1);
console.log(arr1[2]);
console.log(arr1.length);

arr1[0] = 5666;
console.log(arr1[0]);
console.log(arr1, typeof arr1);
console.log(arr1.toString()); //converts the array to string
console.log(arr1.join(" and "));
console.log(arr1.pop()); //removes the array last elemente and returns it
console.log(arr1);
console.log(arr1.shift()); //removes the array first elemente and returns it
console.log("the first element ", arr1);
arr1.push(100);
arr1.push("sagnik");
console.log(arr1);
arr1.unshift("jack"); //add element in the first index of the arr1ay
console.log("the updated arr1 with unshift ", arr1)

delete arr1[2];
console.log("the deleted element", arr1); //here the element is deleted but memory is allocated

let arr2 = [10, 20, 30, 40, 50, 70];
let arr3 = [300, 200, 1000, 500, 550, 50];
let arr = arr1.concat(arr2, arr3); //merge all the array but not change the original form
console.log(arr);

arr3.sort();
console.log(arr3);


let num = [1, 2, 3, 4, 5, 6];
num.splice(1,3);
console.log(num);