class User{
    constructor(name, age, email,password){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}@abc123`
    }
}
const me=new User("Pranjul",20,"pranjul@gmail.com","pranjul");
console.log(me);
console.log(me.encryptPassword());