// There are three way to make object in OOP

// 1. Function Constructor
// 2. Classes
// 3. Object.create()

// 4 rules of Function Constructor

    // 1. create an empty object {}
    // 2. function is called this = {}
    // 3. {} linked to the prototype
    // 4. {} will return automatically

const Computer = function(name, model){
    this.name = name
    this.model = model

    this.aboutComputer = function(){
        console.log(`this computer name is ${this.name} and model is ${this.model}`)
    }
}
const Dell = new Computer('Dell', 'ko4564')
const Hp = new Computer('Hp', 'het4564')
console.log(Dell)
console.log(Hp)

Dell.aboutComputer()
Hp.aboutComputer()

// const obj = {}

// obj.name = 'Anam'
// obj.play = 'boll'
// console.log(obj)


