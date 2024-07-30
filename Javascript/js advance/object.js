/*function multiplyBy5(num) {
    return num * 5;
}

// Add a property to the function
multiplyBy5.power = 2;

console.log(multiplyBy5(10));  // Output: 50
console.log(multiplyBy5.power);  // Output: 2
console.log(multiplyBy5.prototype);  // Output: { constructor: ƒ }
*/

function createUser(name,score)
{
    this.name = name;
    this.score = score;
}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai=new createUser("chai",25)
const tea=new createUser('tea',250)
console.log(chai.printMe())
console.log(tea);