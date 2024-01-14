const input = [1, 2, 3, 4, 2, 5, 6, 1, 7];

const uniqueSet = new Set();
const result = input.filter((element) => {
    if (!uniqueSet.has(element)) {
        uniqueSet.add(element);
        return true;
    }
    return false;
});

console.log(result);



const ans = input.filter((element, index, array) => {
    return array.lastIndexOf(element) === index;
});

console.log(ans);
