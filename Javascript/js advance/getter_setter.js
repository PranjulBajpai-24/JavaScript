class User{
    constructor(name, age, email, password){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    get email(){
        return `${this.em} is the email`
    }
    set email(value){
        this.em = value;
    }
    get password(){
        return `${this._password.toUpperCase()}_abc`
    } 
    set password(value){
        this._password = value
    }
}
const me =new User("Pranjul",20,"pranjul@gmail.com","Pranjul@123")
//console.log(me.password);
//console.log(me.email);

//OLD METHODS OF GETTER AND SETTER I.E. BEFORE INVENTION OF CLASSES 
//USING FUNCTIONS

function User2(name, password) {
    this._name = name; // Use a different name for the internal property
    this._password = password; // Use a different name for the internal property

    Object.defineProperty(this, 'name', {
        get: function() {
            return `${this._name.toUpperCase()} is the Name`; // Corrected toUpperCase method
        },
        set: function(value) {
            this._name = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function() {
            return `${this._password.toUpperCase()}_abc is the password`; // Corrected toUpperCase method
        },
        set: function(value) {
            this._password = value;
        }
    });
}
const me2 =new User2("Pranjul","Pranjul@123")
//console.log(me.name);
//console.log(me.password);

//USING OBJECT

const User3 = {
    _name: "Pranjul",
    _password: "Pranjul@123",

    get name() {
        return `${this._name} is the Name`;
    },
    set name(value) {
        this._name = value;
    },
    get password() {
        return `${this._password.toUpperCase()}_abc`;
    },
    set password(value) {
        this._password = value;
    }
};

const me3 = Object.create(User3);
console.log(me3.name);
console.log(me3.password);
