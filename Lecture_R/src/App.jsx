import React from 'react'
import User from './User';

export default function App(props,state) {

   // State
   state = {
    user : [{ id:12 , name:"Yash" , password:"ypfh7@#$16" },
            { id:42 , name:"Man" , password:"mpfh7@#$07" },
            { id:62 , name:"Jaimin" , password:"jufh7@#$23" }
            ],
    isLoggedIn : false
  }
  
  const array = state.user;
  const newArray = array.map((initial) => {
    return(<li key={initial.id}>{initial.id}</li>);
  });

  // Props
  const Arr = props.number;
  const numArr = Arr.map((num,i) => {return <User key={i} value={num} index={i}/>});

  return(
    <>
    {/* Key With State */}
    <div className='m-10 text-2xl font-serif font-bold'>
      {newArray}
    </div>

    {/* Key With Props */}
    <div className='m-10 text-2xl font-serif font-bold'>
      {numArr}
    </div>
    </>
  )

}