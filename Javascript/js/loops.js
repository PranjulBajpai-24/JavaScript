/* for(let i=1;i<10;i++){
    console.log(i);
} */
/* arr=[]
for(let i=0;i<10;i++){
    arr[i]=i;
}
console.log(arr); */
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        m=i*j
        //console.log(`${i} * ${j} = ${m}`);
        //console.log(i,"*" j,"=",m);
    }
}
i=1
do {
   // console.log(i);
    i=i+2
} while (i<10);
 
s="abcd"
for (const i of s) {
    //console.log(i);
}
const map = new Map()
map.set(1,"one")
map.set(2,"two")
map.set(3,"three")
//console.log(map);
for (const [a,b] of map) {
    //console.log(`${a} :- ${b}`);
} 
const ab={
    n:"pranjul",
    age:20
}
for (const key in ab) {
    //console.log(key," value is ",ab[key]);
}
/* s="abcd"
for (const i in s) {
    console.log(s.charAt(i));
} */
arr=[1,2,3,4,5]
arr.forEach(function(val) {
    //console.log(val*2);
});

//arr.forEach((val)=>console.log(val*3))
function add3(val){
    return val+3
}
//arr.forEach((item)=>console.log(add3(item)))

const objarr=[
    {
        n:1,w:"one"
    },
    {
        n:2,w:"two"
    },
    {
        n:3,w:"three"
    }
]
//objarr.forEach((obj)=>console.log(obj.n," ",obj.w))
//objarr.forEach((obj)=>console.log(`value of ${obj.n} is ${obj.w}`))
num=[1,2,3,4,5,6,7,8,9]
const gr8=num.filter( (val) => val>4)
//console.log(gr8);