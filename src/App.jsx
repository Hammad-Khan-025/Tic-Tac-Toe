import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {

  return (
    <section className="bg-custom-gradient min-h-screen flex flex-col items-center px-2 py-5">
    <Header/>
    <Main/>
    </section>
  )
}

export default App
