const words = ['level', 'hello', 'radar', 'world', 'civic'];

const input = words.filter((ele) => {
    return ele.split('').reverse().join('') == ele
})
console.log(input)