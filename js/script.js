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

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(randomNumber);

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
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});