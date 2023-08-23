let baseObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    [Symbol.iterator](){
        return {
            entries: Object.entries(this),
            index: 0,
            next(){
                if(this.index !== this.entries.length){
                    return {done: false, value: this.entries[this.index++]}
                }
                return {done: true}
            }
        }
    }
}

for(let item of baseObj){
    console.log(item)
}

let endlessIteratingObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    [Symbol.iterator](){
        return {
            entries: Object.entries(this),
            index: 0,
            next(){
                return {done: false, value: Math.floor(Math.random() * 10)}
            }
        }
    }
}

for(let item of endlessIteratingObj){
    console.log(item)
    if(item <= 3 && item >= 1)
        break
}


console.log(Array.from(baseObj))
