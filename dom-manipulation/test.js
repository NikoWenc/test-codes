let arr = [5, 3, 8, 1];

function filterRange(array, a, b){
    return array.filter((item) => {
        if (item >= a && item <= b){
            return item;
        }
    })
}

let filtered = filterRange(arr, 1, 4);

alert( filtered );
alert(arr)