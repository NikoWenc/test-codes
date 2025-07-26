
function unique(arr) {
    let newArr = [];
    arr.filter((item) => {
    if (!newArr.includes(item)) {
        return newArr.push(item);
    }
    });
    return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));