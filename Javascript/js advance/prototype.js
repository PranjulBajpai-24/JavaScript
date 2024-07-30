/*let myHeros=['thor','spiderman']

let heroPower={
    thor:'hammer',
    spiderman:'web',

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.spiderman}`);
    }
}
Object.prototype.addPranjul=function(){
    console.log('Pranjul is added');
}
heroPower.addPranjul();
myHeros.addPranjul();*/

//INHERITANCE
const user={
    name:'Pranjul',
    age:20
}
const Teacher={
    maveVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user
Object.setPrototypeOf(TeachingSupport, Teacher)
//console.log(TASupport.maveVideo)
//console.log(Teacher.name);

String.prototype.truelLength=function(){
    console.log(this);
    console.log(this.name);
    console.log(`true length is ${this.trim().length}`);
}

n="   pranjul     "
n.truelLength();