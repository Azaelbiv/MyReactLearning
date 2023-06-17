import React from 'react'
import { useState } from 'react';
import './App.css';

function Square(){
  const [value, setValue]=useState(null);
  function handleclick(){
    setValue('X');
  }
  return(
    <button
    className='square'
    onClick={handleclick}
    >{value}</button>
    )
}
const App = () => {
  return (
    <>
     <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
     </div>
     <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
     </div>
     <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
     </div>
    </>
  )
}

export default App

