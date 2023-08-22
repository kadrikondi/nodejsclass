setTimeout(() => {
    console.log('we are coding nodejs')
    clearInterval(int)
}, 5000);

let int = setInterval(() => {
    console.log('i love nodejs')
}, 1000);

console.log(__dirname)
console.log(__filename)