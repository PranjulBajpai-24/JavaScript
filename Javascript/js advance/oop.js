/*const user={
    name:'John',
    age: 30,
    email:'john@gmail.com',
    getUserDetails:function(){
        console.log('got user details');
        console.log(this);
        console.log(this.age);
}
}
console.log(user.name);
console.log(user.getUserDetails())
console.log(this);*/

function user(username,loginCount,isLoggedIn) {
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}
const u1=new user('Pranjul',3,true)
const u2=new user('bajpai',11,false)
console.log(u1.constructor);
console.log(u2);