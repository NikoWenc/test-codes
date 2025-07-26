let arr = [5, 3, 8, 1];

function filterRangeInPlace(array, a, b){
    return array.filter((item, index) => {
        if (item < a || item > b){
            return array.splice(index,1);
        }
    })
}

filterRangeInPlace(arr, 1, 4);

alert(arr)