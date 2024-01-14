
const array1 = [2, 4, 6, 8];
const array2 = [1, 3, 5, 7];
//Multiply the corresponding elements of two arrays and then take the sum of all the elements
const result = array1.map((num, index) => num * array2[index])
    .reduce((sum, num) => sum + num, 0);

console.log(result);
