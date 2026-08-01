function addSeven(num){
    return num + 7
}
console.log(addSeven(7))

const multiply = (x,y) => {
    return x * y
}
console.log(multiply(5,5))

function capitalize(str){
    return `${str.charAt(0).toUpperCase()}${str.slice(1, str.length).toLowerCase()}`
}
console.log(capitalize('cat'))
console.log(capitalize('abCdeF'))

const lastLetter = (str) => {
    return str.slice(-1)
}
console.log(lastLetter('dog'))

