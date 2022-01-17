// /**
// Orientation - JavaScript assignment 1
// Solution by: [type your name here]
// */


// // Example function for reading user's input values from html form

const userChoice = document.querySelector('input[name="user-choice"]:checked').value
let winPoint = 0
const history = []
let headamount = 0
let reverseamount = 0
let convertedhistory = []

const headorreverse = () => {
  const myRandomnumber = Math.floor(Math.random() * 2);
  console.log("myRandomnumber: ",myRandomnumber)
  const coinImage = document.querySelector('#coin-image');
  if (myRandomnumber == 0) {
    coinImage.src = "reverse.png"
  } else {
    coinImage.src = "head.png" 
  }

  
  let convertedUserChoice
  if (userChoice == "reverse") {
    convertedUserChoice = 0
  } else {
    convertedUserChoice = 1
  }
  
  const roundChoices = {
    userChoice: convertedUserChoice, 
    computerChoice: myRandomnumber
  }
  history.push(roundChoices)


  const resulthistory = document.querySelector('#result-history')


convertedhistory = history.map((c) => {
  let convertedUserChoice, convertedComputerChoice
  if(c.userChoice == 0) {
    convertedUserChoice = "reverse"
  } else {
    convertedUserChoice = "head"
  }

  if(c.computerChoice == 0) {
    convertedComputerChoice = "reverse"
  } else {
    convertedComputerChoice = "head"
  }
  return {userChoice: convertedUserChoice, computerChoice: convertedComputerChoice}
})

let display = ""
convertedhistory.map((h, index) => {
  
let roundDisplay =
  `<h3> Round ${index + 1}</h1>
  <br/>
  <p>User Choice: ${h.userChoice}</p>
  <br>
  <p> Computer Choice: ${h.computerChoice}`
  display = display + roundDisplay;
})





  resulthistory.innerHTML = display;
  
console.log('userChoice: ', userChoice);
console.log('history: ', history);
  const result = document.querySelector('#result')
  console.log(result.innerHTML)


  const winCount = document.querySelector('#win-count')
  
  if (convertedUserChoice == myRandomnumber) {
    result.innerHTML = "Correct guess! You win"
    winPoint++
    
  } else {
    result.innerHTML = "Incorrect! You lose"
  }
  console.log("result: ", result.innerHTML)

  winCount.innerHTML = winPoint; 



const headcount = document.querySelector('#head-count')

if (myRandomnumber == 1) {
headamount++ 
headcount.innerHTML = headamount;
console.log("headcount: ", headamount);
}

const reversecount = document.querySelector('#reverse-count')

if (myRandomnumber == 0) {
  reverseamount++
  reversecount.innerHTML = reverseamount;
  console.log("reversecount: ", reverseamount);
}
}

const throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', headorreverse);




