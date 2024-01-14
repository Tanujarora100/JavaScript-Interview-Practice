const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 16 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 18 },
];

const ans = students.filter((ele) => {
    return ele.name.charAt(0).startsWith('A') || ele.name.charAt(0).startsWith('C')
});
console.log(ans)