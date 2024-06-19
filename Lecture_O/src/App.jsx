import React from 'react'
import useCustom from './Custom'

export default function App() {

  const data = useCustom();

  return (
    <>
      <div className='m-10 font-bold text-2xl'>
        <button className='bg-orange-400 text-white p-4 rounded-md hover:bg-orange-500 hover:shadow-xl' onClick={data.inCount}>Count : {data.count}</button>
      </div>
    </>
  )
}
