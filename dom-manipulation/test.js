let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function getAverageAge(array){
    return array.reduce((accum, toBeAdd) => (accum += toBeAdd.age) , 0) / array.length;
}
console.log(getAverageAge(arr));