import { useState } from 'react'
import './index.css'
import Board from './Components/Board'
import Modal from './Components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Board />
     <Modal/>
    </>
  )
}

export default App
