import React from 'react'
import pic1 from './assets/Lambo_Green.jpeg'
import pic2 from '/Lambo_Purple.jpeg';
import pic3 from './assets/Lambo_Orange.jpeg';
import './App.css'

function App() {

  return (
    <>
    <div className='mainDiv'>
      <img src={pic1} alt="" />
      <img src={pic2} alt="" />
      <img src={pic3} alt="" />
    </div>
    </>
  )
}

export default App
