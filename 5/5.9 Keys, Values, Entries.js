let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(obj){
    return Object.values(obj).reduce((acc, curr) =>  acc + curr, 0)
}
console.log( sumSalaries(salaries) ); // 650

let user = {
    name: 'John',
    age: 30
};

function count(obj){
    return Object.keys(obj).length
}

console.log(count(user))