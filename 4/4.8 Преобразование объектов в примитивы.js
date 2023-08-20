'use strict';
this.testKey = 'dsfgsf'
let obj = {
    get key(){
        console.log('getter key')
        console.log(this)
        return null
    },
    set key(val){
        console.log('setter key')
        console.log(this)
        this.otherKey = 'chts'
    },
    field: 'field',
    kek: this,
    lol: () => {
        console.log('lol', this)
    },
    function(){
        console.log('function',this)
    }
};
console.log('kek',obj.kek)
const func = () => {
    console.log('arrow func', this)
};
// func();
obj.function()
obj.lol()
obj.func = func
obj.func()

console.log('HAHAHAHA',obj)
obj.toString = function() {

    return 'asdas'

}
obj.valueOf = function () {
    return 1231421
}
console.log(`${obj}`)
console.log(+obj)

obj[Symbol.toPrimitive] = function(){
    return NaN
}
console.log(obj == obj)
console.log(obj.key, obj.otherKey)
obj.key = 1
console.log(obj.key, obj.otherKey)



const anotherObj = {
    kek: 'wait',
    test () {
        let obj1 = {
            hello: function() {
                console.log('Hello world');
                return this;
            },
            obj2: {
                breed: 'dog',
                speak: () => {
                    console.log('woof!');
                    return this;
                }
            }
        };

        console.log(obj1.obj2.speak());
    }
}
anotherObj.test()



