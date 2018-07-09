document.addEventListener('keydown', function(e){
  var key = {
    90: 'z',
    39:'right-arrow'
  }
  movePlayer(key[e.keyCode]);
});

window.onload = function (){
  characters = {

    flash: {
      div: document.getElementById('flash'),
      name: 'The Flash'
    },

    superman: {
      div: document.getElementById('superman'),
      name: 'Superman'
    }
  };

  activateButtons();
};

activateButtons = function(){
  document.getElementById('start-button').onclick = function(){
    startGame(characters);
  }
}

startGame = function(chracters){
  characters.flash.div.style.marginLeft= 0;
  characters.superman.div.style.marginLeft = 0;
    // movePlayer(key.keyCode);
  };

  function checkWinner(){
    if (flashMove >= 1320){
      document.removeEventListener('keydown', function(e){
        var key = {
          90: 'z',
          39:'right-arrow'
        }
        movePlayer(key[e.keyCode]);
      });
      alert("The Flash Won!")
    }
    if (supermanMove >= 1320){
      document.removeEventListener('keydown', function(e){
        var key = {
          90: 'z',
          39:'right-arrow'
        }
        movePlayer(key[e.keyCode]);
      });
      alert("Superman Won!")
    }
  };
var flashMove = 0;
var supermanMove = 0;
function movePlayer(key){
  switch(key) {
    case "z": // press z to move superman
      // var newSupermanPosition = characters.superman.position += 40;
      supermanMove += 40;
      characters.superman.div.style.marginLeft = supermanMove + "px";
      console.log("Superman Flew!")
      break;
    case "right-arrow": // press right arrow to move the flash
      // var newFlashPosition = characters.flash.position += 40;
      flashMove += 40;
      characters.flash.div.style.marginLeft = flashMove + "px";
      console.log("Flash Ran!")
      break;
  }
  checkWinner();
}
