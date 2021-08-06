// // let messages = [
// //     "hi",
// //     "hey",
// //     "wazap",
// //     "gooood",
// //     "bye",
// //     "bbb"
// // ]

// // let cardEl = "hi"
// // let cradElTwo = "hi2"

// // console.log(messages)

// // messages.push(cardEl, cradElTwo)

// // console.log(messages)


// // function typeCards() {
// //     for (let i = 0; i > cards.length; i += 1) {
// //         cardEl = "Cards" + messages[i]
// //     }
// //     console.log(cardEl)
// // }

// // typeCards()

// // console.log(cardEl)

// // // for (let i = 0; i < messages.length; i += 1) {
// // //     console.log(messages[i])
// // // }

// // let randomNumber = Math.floor( Math.random() * 6) + 1

// // console.log(randomNumber)


// let castle = {
//     title: "Live like a king in my castle",
//     price: 190,
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/caste2.png"]
// }

// console.log(castle.price)
// console.log(castle.isSuperHost)

// let person = {
//     name: "sayid",
//     age: 35,
//     country: "syria",
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// let age = 15

// console.log(person.age)

// if (person.age < 6 ) {
//     console.log("free")
// } else if (person.age < 18) {
//     console.log("child discount")
// } else if (person.age < 67 ) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// for (i = 0; i < largeCountries.length; i++) {
//     console.log(" - " + largeCountries[i])
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")

// console.log(largeCountries)

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor ( Math.random() * 3 )
//     return hands[randomIndex]
// }

// console.log( getHand() )

// let fruit =["🍊", "🍊", "🍊", "🍎", "🍎"]
// let appleshelf = document.getElementById("apple-shelf")
// let orangeshelf = document.getElementById("orange-shelf")

// function sort() {
//     for (i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍊") {
//             orangeshelf.textContent += "🍊"
//         } else if (fruit[i] === "🍎") {
//             appleshelf.textContent = "🍎"
//         }
//     }
// }

// const recipient = "Sad"

// // const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const email = `Hey ${recipient}! How is it going? Cheers Per`
// console.log(email)

// function getFirst(arr) {
//     return arr[0]
// }

// let firstCard = getFirst([10, 2, 5])

// console.log(firstCard)

// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments


// //.                parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
// let hi = "Howdy"
// greetUser(hi, "James")


// function add(num1, num2) {
//     return num1 + num2
// }

// add(3, 4)