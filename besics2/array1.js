const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[3]);


// Array method

// myArr.push(6)  //it will add one value at the of the array
// myArr.push(7) //it will add one value at the of the array
// myArr.pop() // it will remove one value at the end

// myArr.unshift(0)  // it will add one value at the starting 
// myArr.shift() //it will remove one value from the starting

// console.log(myArr.includes(9));  // it will give me the value that i want then it is store incide my array or not and it will give me the result in boolean type

// console.log(myArr.indexOf(9)); // which value is not incide the index it will give me the (-1) and which value is existing then it will give the actual index number

// const newArr = myArr.join()  // it will convert the array in the string format

// console.log(myArr);
// console.log(newArr);

//slice and splice


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) 

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // it will print the arr 1 to 3 but the next arr it will be print next 3 array
console.log("C ", myArr);

console.log(myn2);

