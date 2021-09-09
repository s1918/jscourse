let player = {
    name: "Per",
    chips: 145
}

// class EventEmitter{
//     constructor(){
//         this.eventCallbacks = {};
//     }

//     registerEvent(eventName, callback){
//         this.eventCallbacks[eventName] = callback;
//     }

//     emit(eventName, parameter){
//         const functionToBeCalled = this.eventCallbacks[eventName];
//         functionToBeCalled(parameter);
//     }
// }

// class Player extends EventEmitter{
//     contrtructor(playerId){
//         this.cards = [];
//         this.sum = 0;
//         this.won = false;
//         this.stood = false;
//     }

//     getSum() {
//         return this.cards.reduce((sum, card) => sum += card, 0);;
//     }

//     getNewCard() {
//         this.cards.push(getRandomCard());
//         this.sum = this.getSum();
//         this.emit("sumChanged");
//     }
// }
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
let playerStood = false

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
    playerStood = false
    playerCard = []
    dealerCard = []
    hasBlackJack = false
    isAlive = false
    dealerWin = false
    sum = 0
}

function startGame() {
    reset()
    const player1 = new Player(1);
    const dealer = new Player(2);
    player1.getNewCard();
    player1.getNewCard();
    dealer.getNewCard();
    // player1.registerEvent('sumChanged', () => {
    //     cardEl.textContent = player1.getSum();
    // })
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

const getCardListMsg = (cardList, initMsg) => cardList.reduce((acc,ele) => acc += ele + " ", initMsg);

const renderGame = () => {
    sumEl.textContent = "Sum: " + sum
    dealerSumEl.textContent = "Dealer Sum: " + dealerSum 
    cardEl.textContent = getCardListMsg(playerCard, "Your Cards: ");
    dealerEl.textContent = getCardListMsg(dealerCard, "Dealer Cards: ")
    // for (let i = 0; i < dealerCard.length; i++) {
    //     dealerEl.textContent += dealerCard[i] + " "
    // }
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
    } else if (playerStood && dealerSum < 21 && dealerSum > sum) {
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
        playerStood = true
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

