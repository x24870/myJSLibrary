function mapForEach(arr, func){
    let ret = []
    for (let i=0; i<arr.length; i++){
        ret.push(func(arr[i]))
    }
    return ret;
}

arr = [1, 2, 3]
console.log(mapForEach(arr, function(item){
    return item * 2;
}));

var checkItemsLessThan = function(limiter){
    return function(limiter, item){
        console.log(`item: ${item}, limiter ${limiter}`)
        return item < limiter
    }.bind(this, limiter)
}

console.log(mapForEach(arr, checkItemsLessThan(2)));

// construct function and prototype
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullname = function(){
    return `${this.firstname} ${this.lastname}`
}

var jack = new Person("jack", "dorsey")
console.log(jack.getFullname())

// danger of using function constructor on primitives
var numStr = "3"
var num = new Number(numStr)// it returns a object wraped by Number prototype
console.log(`${num == 3}, ${num === 3}`)

console.log($("h1").text());