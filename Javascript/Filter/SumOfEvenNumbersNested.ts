const arr: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const sum = arr.flat(2)
    .filter((num) => num % 2 == 0)
    .reduce((num, sum) => sum + num, 0);
console.log(sum);