function squareElements(): number {
    const numbers: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const ans: number = numbers.flat(2).filter((element) => element % 2 == 0)
        .reduce((sum, element) => sum + element, 0);
    return ans
}

console.log(squareElements())