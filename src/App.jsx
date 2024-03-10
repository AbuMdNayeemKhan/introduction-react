import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Handeler from './Handeler'
import Counter from './Counter'
import Friends from './Friends'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Friends></Friends>
    </>
  )
}

function Device(props){
  return(
    <h1>The product name is: {props.name}. and price is: {props.price}.</h1>
  )
}

function clickHandelerOne(){
  alert('Bangladesh');
}

function Students({name, score}){
  const studentsStyle = {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'gray',
  }
  return (
    <h1 style={studentsStyle}>My Name is {name}. I'm class {score}</h1>
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
