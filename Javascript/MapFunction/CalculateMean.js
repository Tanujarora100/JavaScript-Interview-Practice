const input = [12, 46, 32, 64];


const ans = input.map((num) => {
    return num / 2
}).reduce((sum, num) => sum + num, 0);
console.log(ans)