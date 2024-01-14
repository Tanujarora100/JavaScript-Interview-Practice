const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const filteredNumbers = numbers.flat(2).filter((num, index, array) => num > Math.max(...array), 0);

console.log(filteredNumbers);
