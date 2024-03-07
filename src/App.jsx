import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='student'>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde laborum ad voluptas, dolore in illum culpa aspernatur ex velit nobis, totam, nam fuga nihil at necessitatibus sequi sint maiores est laboriosam consequatur. Accusamus, possimus corporis sint a sequi pariatur? Tempora dolor ratione officiis ullam aliquid nesciunt, quibusdam, unde minima modi eius enim atque consequatur vitae ipsa! Ratione ducimus magni amet at rem, explicabo pariatur, aut voluptas quod sint eveniet suscipit, quos dolorum! Nihil distinctio doloribus porro soluta incidunt, reprehenderit provident odio temporibus quidem corrupti similique et a, atque vero fugit iste asperiores adipisci nobis ex? Veritatis omnis odio quod?</p>
      <Devlopers></Devlopers>
    </>
  )
}

function Devlopers(){
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={devStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
