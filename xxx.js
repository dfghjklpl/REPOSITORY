// let people = [
//     { name: 'Adil', age: 16, budget: 800000 },
//     { name: 'Elnazar', age: 17, budget: 800000 },
//     { name: 'jooma', age: 18, budget: 500000 },
//     { name: 'Albina', age: 19, budget: 400000 },
//     { name: 'Semetey', age: 16, budget: 300000 },
//     { name: 'Adahan', age: 18, budget: 200000 },
//     { name: 'Danil', age: 17, budget: 100000 }
// ]

// const newPeople = people.map(person => `(${person.name} (${person.age})`)

// console.log(newPeople);




// For
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }
// let str = 'Adil'
// let arr = []
// for (let i = 0; i < str.length; i++) {
//     arr.push(str[i])
// }
// console.log(arr);


// Filter
// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults);



// let adults = people.filter(person => {
//     if (person.budget >= 500000) {
//         return true
//     }
// })
// console.log(adults);


// const adults = people.filter(person => person.age >= 18)
// console.log(adults);


// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount)

// let amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)
// console.log(amount);

// let amount = people.reduce((total, person) => total + person.budget, 0)
// console.log('amount')

// Find
// people.find(person => person.name === 'jooma')
// console.log('jooma')

// const joomaIndex = people.findIndex(person => person.name === 'jooma')
// console.log(joomaIndex);



// const newPeople = people
//     .filter(person => person.budget > 50000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budget: Math.sqrt(person.budget)
//         }
//     })
//     .reduce((total, person) => total + person.budget, 0)
// console.log("newPeople")

// const Adil = people.find(person => person.name === 'Adil')
// console.log(Adil);




// ЗАДАЧИ 1 - 10

// let array = ['Danil', 'Elnazar', 'jooma', 'Adahan']
// function renderName(names) {
//     let body = document.body;
//     body.innerHTML = names
//         .map((name) => {
//             return `<div>
//             <h2>${name}</h2>
//             </div>`
//         })
//         .join('')
// }

// renderName(array);

//SPLICE
//let nums = [1, 9, 2, 6,];
//let newNames = nums.splice(0, 2, "3", "5")   сплайс изменяет и удаляет

//let nums = [1, 5, 7, 9,];
//let newNums = num.slice(2) cлайс удаляет 