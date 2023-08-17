// реализовать глубокое копирование

function deepCopy(value){
    if(Array.isArray(value)){
        return value.map(item => deepCopy(item))
    } else if (value !== null && value instanceof Date) {
        return new Date(value)
    } else if (value !== null && typeof value === 'object'){
        const newValue = Object.fromEntries(
            Object.entries(value)
            .map((([key, value]) => [key, deepCopy(value)]))
        )
        return Object.assign({}, newValue)
    } else {
        return value
    }
}

const item = {
    objField: { title: 'jkoa', key: 'pencil'},
    arrayField: [{ kek: 'kke', key: 'drin'}],
    date: new Date()
}
const newItem = deepCopy(item)
newItem.arrayField[0].kek = 'java'
newItem.objField.title = 'js'
console.log(newItem.date)
console.log(newItem)
console.log(item)