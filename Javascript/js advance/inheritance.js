class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    login()
    {
        console.log(this.name + " is now logged in");
    }
}
class Admin extends User
{
    constructor(name, age, email,password)
    {
        super(name, age);
        this.email=email;
        this.password=password;
    }
    addCourse()
    {
        console.log(`Anew course is added by ${this.name} and he has an experience of ${this.age-20} years`);
    }
}
const user1 = new Admin("Pranjul", 30,"pranjul@gmail.com","pranjul@123");
console.log(user1);
//user1.login();
//user1.addCourse();
const User2=new User("Bajpai Ji",30)
//User2.login()
//User2.addCourse()
/*console.log(user1 instanceof User);
console.log(user1 instanceof Admin);
console.log(User2 instanceof User);
console.log(User2 instanceof Admin);*/

class me{
    constructor(name){
        this.name=name;
    }
    logMe(){
        console.log(this.name);
    }
    static UniqueID(){
        console.log(Math.floor(Math.random() * 10));
    }
}
const pranjul=new me("Pranjul")
pranjul.logMe();
pranjul.UniqueID();