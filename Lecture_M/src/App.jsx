import React from 'react'
import { useState } from 'react'

export default function App() {
  
  const [name,setName] = useState("Yash");

  const newName = "";

  const changeName = () => {
    setName(newName => (newName !== "Krishna ji" ? "Krishna ji" : "Yash"));
  }

  return (
    <>
    <div className='m-10 text-2xl font-sans font-bold flex flex-col gap-3 w-max'>
      <h1 className='text-pink-500'> Hello {name} </h1>
      <button className='p-3 bg-pink-400 rounded-full text-white hover:bg-pink-500' onClick={changeName}>Change Name</button>
    </div>
    </>
  )
}
