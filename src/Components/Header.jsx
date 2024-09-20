import React from 'react'
import logo from '/images/game-logo.png'

const Header = () => {
  return (
    <header className='flex flex-col items-center gap-5 pb-5'>
      <img src={logo} alt="Tic Tac Toe Logo" className='w-16'/>
      <h1 className='text-slate-900 font-serif font-extrabold text-2xl sm:text-3xl'>Tic-Tac-Toe</h1>
    </header>
  )
}

export default Header
