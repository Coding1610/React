import React from 'react'
import './App.css'
import Header from './Components/Header'

function App() {

  const number = 16;

  function show(friend){
    return friend;
  };

  const arr = [1,2,3,4,5];

  const obj = {
    one : "1",
    two : 1310
  }
 
  const ans = false;

  return (
    <>
      <Header ptNumber={number} ptArray={arr} ptObject={obj.one} ptFunction={show("Krishna")} ptBool={ans}/>
    </>
  )
}

export default App