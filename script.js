const diceTotal = document.getElementById("total")
const playAgain = document.getElementById("playAgain")
const rollButton = document.getElementById("rollButton")
const diceImage = document.getElementById("diceImage")
const textBox = document.getElementById("textBox")
let diceTotal1 = 0

rollButton.addEventListener("click", () => {
    diceImage.style.display = "block"
    const num = Math.floor(Math.random() * 6 + 1)
    console.log (num)

       if (num === 1) {
        diceImage.src ="img/dice1.png"
        diceTotal1 = 0
        textBox.textContent = "You lose!"
        

    }else if (num === 2) {
        diceImage.src ="img/dice2.png"
        diceTotal1 += 2
    
    }else if (num === 3) {
        diceImage.src ="img/dice3.png"
        diceTotal1 += 3

    }else if (num === 4) {
        diceImage.src ="img/dice4.png"
        diceTotal1 += 4
    }else if (num === 5) {
        diceImage.src ="img/dice5.png"
        diceTotal1 += 5
    }else if (num === 6) {
        diceImage.src ="img/dice6.png"
        diceTotal1 += 6
    }
     if (diceTotal1 > 20) {
         rollButton.disabled = true
        diceTotal1 = 0
        textBox.textContent = "You win!"
     }
    if (num === 1) {
        rollButton.disabled = true
      }
    if (total= 0) {
        textBox.textContent = "Lets play"
        diceTotal1 = 0
        }
     diceTotal.textContent = diceTotal1
    })
    
    playAgain.addEventListener("click", () => {
       textBox.textContent = "Lets play"
       rollButton.disabled = false
       diceImage.style.display = "none"
       
    })
    











