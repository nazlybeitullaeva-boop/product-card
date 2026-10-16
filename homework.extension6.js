let arr = [1,'hello',3,4,5,'world'];
let arr2 = [newElement1, newElement2];
arr.splice(2, 0, ...arr2);

console.log(arr);
console.log(arr2);