let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(array){
    return array.slice().sort();
}

let sorted = copySorted(arr);

alert( sorted );
alert( arr );