import React, { useState } from "react";

const GameBoard = ({board, handleGameBoard}) => {



  return (
    <ol className="flex flex-col items-center justify-center gap-4 sm:gap-6 mx-5 mt-10 mb-5">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="grid grid-cols-3 gap-4 sm:gap-6">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="h-20">
                <button className="bg-[#c2b992] w-16 sm:w-20 h-16 sm:h-20 rounded-md text-3xl sm:text-4xl font-extrabold font-serif text-slate-900" 
                  onClick={()=> handleGameBoard(rowIndex, colIndex)}
                  disabled={!board[rowIndex][colIndex] ? false : true}>
                  {playerSymbol }
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
