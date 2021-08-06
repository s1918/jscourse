let player = {
    name: "Per",
    chips: 145
}
let playerCard = []
let dealerCard = []
let sum = 0
let dealerSum = 0
let hasBlackJack = false
let isAlive = false
let dealerWin = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let dealerSumEl = document.getElementById("dealerSum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
let dealerEl = document.getElementById("dealer=el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor ( Math.random() * 13) + 1 
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}

function reset() {
    playerCard = []
    dealerCard = []
    hasBlackJack = false
    isAlive = false
    dealerWin = false
    sum = 0
}

function startGame() {
    reset()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let dealerFirstCard = getRandomCard()
    playerCard.push(firstCard, secondCard)
    dealerCard.push(dealerFirstCard)
    sum = firstCard + secondCard
    dealerSum = dealerFirstCard

    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Your cards: "
    dealerEl.textContent = "Dealer Cards: "
    dealerSumEl.textContent = "Dealer Sum: " + dealerSum 
    for (let i = 0; i < playerCard.length; i++) {
        cardEl.textContent += playerCard[i] + " "
    }
    for (let i = 0; i < dealerCard.length; i++) {
        dealerEl.textContent += dealerCard[i] + " "
    }
    if (sum < 21) {
        message = "Want another?"
    } else if (sum === 21) {
        message = "You got it!"
        hasBlackJack = true
    } else {
        message = "You Lose!"
        isAlive = false      
    }
    if (dealerSum > 21) {
        message = "You win!"
        // isAlive = false
    } else if (dealerSum === 21) {
        message = "Dealer Wins!"
        dealerWin = true
    } else if (dealerSum < 21 && dealerSum > sum) {
        message = "Dealer Wins!"
        dealerWin = true
    }

    messageEl.innerText = message
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        playerCard.push(card)
        renderGame()
    } else {
        message = "Game over!"
    }
    messageEl.innerText = message

}

function stand () {
    while (isAlive === true && dealerWin === false && dealerSum <= sum && dealerSum <= 21) {
        let dNewCard = getRandomCard()
        dealerSum += dNewCard
        dealerCard.push(dNewCard)
        renderGame()
    } 
}


// function stand () {
//     if (isAlive === true && hasBlackJack === false) {
//         if (dealerSum < sum && dealerSum <= 21) {
//             let dNewCard = getRandomCard()
//             dealerSum += dNewCard
//             dealerCard.push(dNewCard)
//             renderGame()
//         } 
//     } else {
//         message = "Game finished!"
//     }
//     messageEl.innerText = message
// }

