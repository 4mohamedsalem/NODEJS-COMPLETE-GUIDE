/* const name = "Figo"
const age = 23
const userHasHobbies = true

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    " , age is " +
    userAge +
    " and ther user has hobbies: " +
    userHasHobbies
  )
}

// const add = (a, b) => a + b
// const addOne = (a) => a + 1
const addRandom = () => 1 + 2

// console.log(add(1, 2))
// console.log(addOne(1))
console.log(addRandom())

console.log(summarizeUser(name, age, userHasHobbies))
*/

/*
const person = {
  name: "Figo",
  age: 23,
  greet() { // same as --> greet: function() {}
    console.log("Hi, I am " + this.name)
  },
}

person.greet()
*/
/*
const person = {
  name: "Figo",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name)
  },
}
*/
/*
const copiedPerson = { ...person }
console.log(copiedPerson)

const hobbies = ["Sports", "Drawing"]
// for (const hobby of hobbies) {
//   console.log(hobby)
// }
// console.log(hobbies.map((hobby) => "Hobby : " + hobby)) // map Method
// console.log(hobbies)
// hobbies.push("Programming")
// console.log(hobbies)
const copiedArray = [...hobbies] // same as --> hobbies.slice()
// --> Array in array [hobbies]
// --> [...hobbies] = hobbies
console.log(copiedArray)

const toArray = (...args) => {
  // (arg1, arg2, arg3)
  return args // [arg1, arg2, arg3]
}

console.log(toArray(1, 2, 3, 4))
*/
// //////////////////////////////////////////////////////////////////
/*
const person = {
  name: "Figo",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name)
  },
}

const printName = ({ name }) => {
  // (personDate)
  console.log(name) // personDate.name)
}

printName(person)

const { name, age } = person
console.log(name, age)

const hobbies = ["Sports", "Drawing"]
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)
*/
// ////////////////////// asynchronous //////////////
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!")
    }, 1500)
  })
  return promise
}

setTimeout(() => {
  console.log("Timer is done!")
  fetchData()
    .then((text) => {
      console.log(text)
      return fetchData()
    })
    .then((text2) => {
      console.log(text2)
    })
}, 2000)

console.log("Hello")
console.log("Hi!")
