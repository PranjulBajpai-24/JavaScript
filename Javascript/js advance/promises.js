/*const promise_1=new Promise(function(resolve,reject){
    //Do an async task
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise_1.then(function(){
    console.log('Promise_1 consumed');
}).finally(()=>{
    console.log('Promise 1 is complete');
})
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async Task (this is the promise which is not stored in variable)");
        resolve()
    },2000);
}).then(function(){
    console.log("Promise again consumed");
}).finally(()=>{
    console.log('Promise 2 is complete');
})

const promise_3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'Pranjul',age:20})
    },3000)
})
promise_3.then(function(data){
    console.log(data)
}).finally(()=>{
    console.log('Promise 3 is complete');
})

const promise_4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: 'Pranjul', password: 123456});
        } else {
            reject('Error: Something went wrong');
        }
    }, 4000);
});

promise_4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=>{
    console.log('Promise is in its final state i.e. it is either resolved or rejected');
    console.log('Promise 4 is complete');
});

const promise_5 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: 'Javascript', password: 123456});
        } else {
            reject('Error: Javascript went wrong');
        }
    }, 5000);
});
async function consume_promise_5(){
    try {
        const response=await promise_5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    console.log('Promise 5 is complete');
}
consume_promise_5()


 /*async function getAllUsers(){
    try {
        const response1=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=response1.json()
        console.log(typeof data);
    } catch (error) {
        console.log('E:',error);
    }
 }
 getAllUsers()*/

 /*fetch('https://api.github.com/users/hiteshchoudhary')
 .then((response) => {
    return response.json();
    }).then((data) => {
        console.log(data);
}).catch((error) => {
    console.log('E:',error);
}).finally(()=>{
    console.log('Promise 6 is complete');
});*/
                