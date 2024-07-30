const pi_descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(pi_descriptor);
const me={
    name:"Pranjul",
    age:20,
    isSingle:false
}
console.log(me);
console.log(Object.getOwnPropertyDescriptor(me,"name"));

Object.defineProperty(me,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(me,"name"));