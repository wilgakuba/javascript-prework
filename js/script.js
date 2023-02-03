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

printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(randomNumber);
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

function displayResult(argComputerMove, argPlayerMove){

if( argComputerMove == 'kamień' && argPlayerMove == 'papier');
 {
    printMessage('Ty wygrywasz!');
  }

  if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') 
  {
    printMessage('Ty wygrywasz!');
  }

  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') 
  {
    printMessage('Ty wygrywasz!');
  }
  
  
  
  if( argComputerMove == 'kamień' && argPlayerMovee == 'nożyce');
  {
     printMessage('Przegrywasz!');
   }
 
   if( argComputerMove == 'papier' && argPlayerMove == 'kamień') 
   {
     printMessage('Przegrywasz!');
   }
 
   if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') 
   {
     printMessage('Przegrywasz!');
   }

   if( argComputerMove == argPlayerMove) {
    printMessage('Remis!')
   }

   if(argPlayerMove == 'nieznany ruch') {
    printMessage('Błąd!')
   }
  }