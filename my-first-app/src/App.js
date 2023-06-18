import React from 'react'
import { useState } from 'react';
import './App.css';

function Square({ value, onSquareClick}){

  return(
    <button
    className='square' onClick={onSquareClick}>
      {value}
    </button>
    )
}
const App = () => {
  const [squares, setSquares]=useState(Array(9).fill(null));

  function handleclick(i){
    const nextsquares=squares.slice();
    nextsquares[i]="X";
    setSquares(nextsquares);
  }
  return (
    <>
     <div className='board-row'>
      <Square value={squares[0]} onSquareClick={()=> handleclick(0)}/>
      <Square value={squares[1]} onSquareClick={()=> handleclick(1)}/>
      <Square value={squares[2]} onSquareClick={()=> handleclick(2)}/>
     </div>
     <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=> handleclick(3)}/>
      <Square value={squares[4]} onSquareClick={()=> handleclick(4)}/>
      <Square value={squares[5]} onSquareClick={()=> handleclick(5)}/>
     </div>
     <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=> handleclick(6)}/>
      <Square value={squares[7]} onSquareClick={()=> handleclick(7)}/>
      <Square value={squares[8]} onSquareClick={()=> handleclick(8)}/>
     </div>
    </>
  )
}

export default App

