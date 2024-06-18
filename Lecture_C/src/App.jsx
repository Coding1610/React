import React from 'react'
import './App.css'
import Children_F from './Components/Children_F';
import Children_C from './Components/Children_C';

function App() {
  
  const name = "Yashu";

  const arr = [1,"two"];

  const obj = {
    age : 20,
    color : "white",
    friend : "Car"
  };

  const number = 12;

  const print = (Name) => {
    return Name;
  }

  return (
    <>
      <div className='m-10'>
        <h1 className='tagH1'> Hello {name}. </h1>
        <h3> Hello {9+7}. </h3>
        <img src='https://i.pinimg.com/564x/1b/4b/09/1b4b093d194dc6a5a61633ec22f16945.jpg' alt='img'/>
        <p> Hello {print("Krishna")}. </p>
        <h2> Im {obj.age} years old. </h2>
        <p> i have {arr[1]}. </p>
      </div>

      <Children_F> _yashu_016 </Children_F>
      <Children_C> Lamborghini Roadstar </Children_C>
    </>
  )
}

export default App