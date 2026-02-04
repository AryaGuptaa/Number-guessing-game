let randomNum = parseInt(Math.random()* 100 + 1);

const userInput = document.querySelector('#numberGuess');
const remaining = document.querySelector('#remaining')
const submit = document.querySelector('#submit');
const message = document.querySelector('#message');
const prev = document.querySelector('#prevGuess');


let guessCount = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(guess > 100 || guess < 1 || isNaN(guess)){
    alert(`Please enter a valid number.`)
    return;
  } 

  checkGuess(guess);
  prev.innerHTML += guess + " ";

  if(guess !== randomNum){
    userInput.value = "";
  }

  guessCount++;
  remaining.innerText = 11 - guessCount;

  if(guessCount > 10){
    endGame("Game Over! Number was " + randomNum);
  }

}

function checkGuess(guess){
  if(guess === randomNum){
    let msg = `Your guess is correct.`;
    displayMsg(msg);
  }
  else if(guess < randomNum){
    displayMsg(`Your number is smaller`);
  }
  else{
    displayMsg(`Your number is greater `); 
  }
}

function displayMsg(msg){
  message.innerText = msg;
}

function endGame(msg){
  displayMsg(msg);
  playGame = false;
  userInput.disabled = true;
  submit.disabled = true;

  const newBtn = document.createElement('button');
  newBtn.innerText = ('Start New Game');
  newBtn.id = ('#newGameBtn');

  document.querySelector('#form').appendChild(newBtn);
  newBtn.addEventListener('click', function(){
    startGame();
    newBtn.remove();
  })

} 

function startGame(){
  randomNum = parseInt(Math.random()*100 + 1);
  guessCount = 1;
  playGame = true;

  prev.innerHTML = "";
  remaining.innerText = "10";
  message.innerText = "";

  userInput.disabled = false;
  submit.disabled = false;
  userInput.value = "";
}

