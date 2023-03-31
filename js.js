console.log('link alive!!!!!!!!!')

let myButtons = document.querySelectorAll('.box')
let instruct = document.getElementById('instruct')
let guesses = document.getElementById('guesses')
const MyButt = document.getElementById('myButt')
let answer = 0
let guessCount = 5
myButt.addEventListener('click', reset)

function reset(){
    guessCount = 5
    answer = Math.floor(Math.random() * 10)
    instruct.textContent = "Select a box to play!"
    myButtons.forEach((singleButton) => {
        singleButton.style.backgroundImage = "url(./images/boxgame-01.jpg)"
        singleButton.disabled = false
    })
}

function disableAll(){
    myButtons.forEach((singleButton) => {singleButton.disabled = true})
}


function playGame(){

    myButtons.forEach((singleButton) => {
        singleButton.addEventListener('click',(e) => {
    
            e.preventDefault()
            singleButton.disabled = true
            guessCount -=  1
            
            if (singleButton.textContent == answer) {
                instruct.textContent = "You won in "+(5-guessCount)+" guesses"
                singleButton.style.backgroundImage = "url(./images/boxgame-03.jpg)"
                disableAll()
            }

            else{
                instruct.textContent = "You have "+guessCount+" guesses remaining."
                singleButton.style.backgroundImage = "url(./images/boxgame-02.jpg)"
                if (guessCount == 1) {instruct.textContent = "You have one guess remaining. Make it count..."}
                if (guessCount <= 0) {
                    instruct.textContent = "You lost, you loser!"
                    disableAll()
                }
            }
        
    })})

}

reset() 
playGame()