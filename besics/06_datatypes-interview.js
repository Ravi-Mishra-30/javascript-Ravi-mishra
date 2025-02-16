// for interview prespective

// datatypes have 2 typea (1) primitive and (2) nonprimitive or refrencetype

// #primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;

// const scoreValue = 100.3;

// const isLoggedIn = falselse

// const outsideTemp = null

// let userEmail;

// const id = Symbol('123')

// const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 32596545864869n



// ReferenceType (Non primitive)

// Array, Objects, Function

// const heros = ["shaktiman", "naagraj", "dogs"]

// let myObj = {
//     name: "hitesh",
//      age: 22
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive), Heap Memory (non-Primitive)

let myYoutubename = "ravimishradoycom"

let anotherName = myYoutubename

anotherName = "chaiaurcode"  

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ravi@google.com"

console.log(userOne.email);
console.log(userTwo.email);


