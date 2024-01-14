
const input = ["hello", "world", "india"];
const ans = input.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1);
})

console.log(ans)