const obj = {
    count: 0,
    arr: [[true, false]],
    valueOf(){
        if(this.count === 2){
            const [left, right] = this.arr.at(-1)
            if(left === right)
                this.arr.push([true, false])
            else {
                this.arr.push([true, true])
            }
            this.count = 0
            this.arr.shift()
        }
        this.count += 1
        return this.arr.at(-1)[this.count - 1]
    }
}
console.log(obj > obj)
console.log(obj > obj)
console.log(obj > obj)
console.log(obj > obj)
console.log(obj > obj)
console.log(obj > obj)