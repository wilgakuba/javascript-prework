function playGame(){
  
  function clearMessages()

  let playerInput = getMoveName(randomNumber);

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    }
    if(randomNumber == 2){
      return 'papier';
    }
    if(randomNumber == 3){
      return 'nożyce';
    }
  }
  /*
  if(randomNumber == 1){
    computerMove = 'kamień';
  }

  if(randomNumber == 2){
      computerMove = 'papier';
  }

  if(randomNumber == 3){
      computerMove = 'nożyce'
  } */

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(randomNumber);
  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  }

  if(playerInput == '2'){
      playerMove = 'papier';
  }

  if(playerInput == '3'){
      playerMove = 'nożyce';
  } */

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(computerMove, playerMove){
  
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove); 

  if(computerMove == 'kamień' && playerMove == 'papier');
  {
      printMessage('Ty wygrywasz!');
    }

    if(computerMove == 'papier' && playerMove == 'nożyce') 
    {
      printMessage('Ty wygrywasz!');
    }

    if(computerMove == 'nożyce' && playerMove == 'kamień') 
    {
      printMessage('Ty wygrywasz!');
    }
    
    
    
    if(computerMove == 'kamień' && playerMovee == 'nożyce');
    {
      printMessage('Przegrywasz!');
    }
  
    if(computerMove == 'papier' && playerMove == 'kamień') 
    {
      printMessage('Przegrywasz!');
    }
  
    if(computerMove == 'nożyce' && playerMove == 'papier') 
    {
      printMessage('Przegrywasz!');
    }

    if(computerMove == playerMove) {
      printMessage('Remis!')
    }

    if(playerMove == 'nieznany ruch') {
      printMessage('Błąd!')
    }
    }
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame('Guzik został kliknięty');
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame('Guzik został kliknięty');
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('Guzik został kliknięty');
});