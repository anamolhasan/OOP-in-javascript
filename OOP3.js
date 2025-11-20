//  There are three way to make object in OOP

//  1. Function Constructor 
//  2. Classes 
//  3. Object.create()

// let a = 10
// function test(){
//     let a = 20
//     console.log(a)
// }
// test()
// console.log(a)

console.log("a")
setTimeout(()=>{
 console.log('b')
},0)
Promise.resolve().then(()=>{
    console.log('c')
})
console.log('d')