let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array){
    return array.reduce((accum, item) => {
        accum[item.id] = item;
        return accum;
}, {})
};

let usersById = groupById(users);

console.log(usersById);