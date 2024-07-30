const symbol=Symbol();
const myobj={
    name:"pranjul",
    age:20,
    email:"pranjul@apple.com",
    city:"Kanpur",
    [symbol]:"mysym1"
}
const {name:n}=myobj;
const{age}=myobj;
console.log(n);
console.log(age);
/* console.log(myobj["name"])
console.log(myobj["age"])
console.log("My city is ",myobj.city," and my email is ",myobj.email)
console.log(myobj.symbol); */
/* console.log(myobj);
myobj.greetings=function(){
    console.log(`hello Mr ${this.name}`);
}
console.log(myobj.greetings());
 */
/* myobj.sum=function(a,b){
    console.log(a+b);
}
console.log(myobj.sum(3,4)); */
/*const myobj2=new Object()
myobj2.email="Bajpai@gmail.com",
myobj2.fullname={
    fName:"Pranjul",
    Lname:"Bajpai",
    age:{
        dob:"24-04-2004"
    }  
};
 console.log(myobj2.fullname.fname); */
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"};
const obj3={...obj1,...obj2}
console.log(obj3)
const users=[
    {id:1,
    n:"a"},
    {id:2,
    n:"b"},
    {id:3,
    n:"c"}
]
console.log(users[1]);
console.log(Object.keys(obj1)," & ",Object.values(obj1));
console.log(Object.entries(users));


