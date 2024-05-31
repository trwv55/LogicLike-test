import './scss/style.scss';
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './scss/style.scss';
import Board from './components/Board/Board'

function App() {

  return (
    <>
    <div className="app-wrapper">
        <Board />
    </div>
    </>
  )
}

export default App
