import React, {useState} from "react";
import Player from "./Player";
import GameBoard from "./GameBoard";
import WinningCombinations from "./WinningCombinations";
import GameOver from "./GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Main = () => {

  const [activePlayer, setActivePlayer] = useState('X')
  const [gameBoard, setGameBoard] = useState(initialGameBoard)
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  })

  const handleWinnerPlayerName = (symbol,newName) => {
    setPlayers((prevState) => {
      return {
        ...prevState,
        [symbol] : newName
      }
    })
  }

  const handleGameBoard = (rowIndex, colIndex) => {
    setGameBoard((prevState)=>{
      const updatedBoard = [...prevState.map((innerArray)=> [...innerArray])]
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    })
    handleSquareValue();
  }

  const handleSquareValue = () => {
    setActivePlayer((prevState)=> (prevState === 'X' ? 'O' : 'X'))
  }
  const handlePlayAgain = () => {
    setGameBoard(initialGameBoard)
    setActivePlayer('X')
  }

  let winner;

  for(const combination of WinningCombinations){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
  }
  const gameDraw = gameBoard.flat().every((cell) => cell) && !winner;  

  return (
    <main className="w-full sm:w-[550px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-lg  shadow-custom-shadow text-white tracking-wider py-5 px-0 mt-5 relative overflow-hidden">

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 place-items-center text-sm sm:text-base">
          <Player name="Player 1" symbol="X" isActive={activePlayer==='X'} handleWinnerPlayerName={handleWinnerPlayerName}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer==='O'} handleWinnerPlayerName={handleWinnerPlayerName}/>
        </ol>
        <GameBoard board={gameBoard} activePlayerSymbol={activePlayer} handleGameBoard={handleGameBoard} />
        <GameOver winner={winner} gameDraw={gameDraw} handlePlayAgain={handlePlayAgain} />  
    </main>
  );
};

export default Main;
