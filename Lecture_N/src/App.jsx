import React from 'react'
import { useState , useEffect } from 'react'

export default function App() {

  const [inCount,setinCount] = useState(0);
  const [deCount,setDecount] = useState(100);

  useEffect( () => {
    console.log("Use Effect Called");
  } , [inCount])

  const increamentCount = () => {
    setinCount(inCount+1);
  }

  const DecreamentCount = () => {
    setDecount(deCount-1);
  }

  return (
    <>
      <div className='flex gap-7 justify-center items-center w-screen h-screen'>
        <button className='bg-purple-500 text-2xl font-bold font-sans p-4 rounded-lg text-white shadow-xl hover:bg-purple-600' onClick = {increamentCount} >Count : {inCount}</button>
        <button className='bg-purple-500 text-2xl font-bold font-sans p-4 rounded-lg text-white shadow-xl hover:bg-purple-600' onClick = {DecreamentCount} >Count : {deCount}</button>
      </div>
    </>
  )
}