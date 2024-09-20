import React, { useState, useEffect } from 'react'

const GameOver = ({winner, gameDraw, handlePlayAgain}) => {
  
  return (
    <section className={`absolute top-0 flex flex-col gap-14 sm:gap-16 justify-center items-center w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.9)] via-[rgba(15,23,42,0.9)] to-[rgba(0,0,0,0.9)] font-bold tracking-widest transition-all duration-500 ${(winner || gameDraw)? 'scale-100' : 'scale-0'}`}>
      <h1 className='text-4xl sm:text-5xl text-[#f1d246] font-extrabold'>Game Over!</h1>
      <p className='text-base sm:text-lg'>
      {winner ? `🥳 ${winner} won 🥳` : "It's a draw"}
      </p>
      <button className='text-[#f1d246] border-2 border-[#f1d246] py-1 px-3 rounded-md hover:bg-[#f1d246] hover:text-slate-900 transition-all duration-300' onClick={handlePlayAgain}>Play Again</button>
    </section>
  )
}

export default GameOver
