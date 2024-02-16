// function play(){
//   const homeScreen = document.getElementById('home-screen');
//   // hidden
//   homeScreen.classList.add('hidden');
//   // console.log(homeScreen.classList);

//   // show

//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log('playerPressed', playerPressed)

  // get ex 
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet);


  // math or not 
  if (playerPressed === expectedAlphabet) {
    console.log('you get point');
    // console.log('you have pressed ', expectedAlphabet);
    // update score
    //1 get the currunt score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    //2 increase the score boy
    //3 show the update score

    //start new round 
    removeBackgroundColorById(expectedAlphabet);
    continueGame(); 
  } else {
    console.log('you miss piont')
  }
}
document.addEventListener('keyup', handleKeyboardButtonPress) 

function continueGame() {
  // step 1 generate alphabete 
  const alphabet = getARandomAlphabet();
  // console.log('Your random ', alphabets);
  // set alphabet
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  // det bg 
  setBackgroundColor(alphabet);

}
function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
}