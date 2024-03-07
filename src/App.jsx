import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Todo'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo toDo='Learn More about react.'></Todo>
      <Todo toDo='Learn More about Javascipt.'></Todo>
    </>
  )
}

function Device(props){
  return(
    <h1>The product name is: {props.name}. and price is: {props.price}.</h1>
  )
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
