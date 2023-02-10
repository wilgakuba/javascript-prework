{
  const playGame = function(playerInput){
  
  clearMessages();

  const getMoveName = function(argMove) {
        if (argMove == 1) {
            return 'kamień';
        } else if (argMove == 2) {
            return 'papier';
        } else if (argMove == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMove + '.');
            return 'nieznany ruch';
        }
      }
    
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    computerMove = getMoveName(randomNumber),
    
    playerMove = getMoveName(playerInput);

    printMessage('Mój ruch to: ' + computerMove);

    printMessage('Twój ruch to: ' + playerMove);

    const displayResult = function(computerMove, playerMove){
    
      if ((computerMove == 'kamień' && playerMove == 'papier') ||
      (computerMove == 'nożyce' && playerMove == 'kamień') ||
      (computerMove == 'papier' && playerMove == 'nożyce')) {
      printMessage('Ty wygrywasz!');
    } else if (computerMove == playerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Tym razem przegrywasz!');
    }
  
    };
    displayResult(computerMove, playerMove);
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

}
