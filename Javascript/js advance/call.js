function SetUserName(name) {
    this.name=name
    console.log(name);
}
SetUserName("pranjul")

function createUser(name,age,pass) {
    SetUserName.call(this,name)
    this.age=age
    this.pass=pass
}

 const me=new createUser('Pranjul',20,'12345678')
 console.log(me);