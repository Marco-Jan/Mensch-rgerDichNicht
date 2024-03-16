import { Player } from "./Components/player";
import { Play } from "./State/play";
import { StartScreen } from "./View/startscreen";
import { PlayField } from "./View/playfield";

//--------------------------------------------------AUSFÜHRUNG-----------------------------------------
const start = new StartScreen();
const startButton = document.getElementById("startButton");

startButton!.addEventListener("click", () => {
  console.log("hello start");
  const boardSelection = document.getElementById("boardSelection") as HTMLSelectElement;
  const selectedBoard = parseInt(boardSelection.value, 10);
  const playField = new PlayField(selectedBoard); 
  const play = new Play(start, selectedBoard);
  const myPlayer1 = new Player("red");
  play.addPlayer(myPlayer1);

  const myPlayer2 = new Player("blue");
  play.addPlayer(myPlayer2);

  const myPlayer3 = new Player("green");
  play.addPlayer(myPlayer3);

  const myPlayer4 = new Player("yellow");
  play.addPlayer(myPlayer4);

  play.playGame();
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//TODO:     show Figures Endzone(movement)
//TODO      Errorhandler when all figures on field

//-----------------------------------------------------------------------
//TODO:     Figur spawn only on 6
