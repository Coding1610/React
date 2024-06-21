import React from 'react'

export default function App(props,state) {

  const arr = [10,20,30,40,50];

  // Props
  const names = props.nameArr;

  const newArr = arr.map((num , index )=> { 
    console.log(`Index : ${index} & Value : ${num}`);
    return <li>{num*2}</li>;
  })

  // console.log(`Old Array : ${arr}`);
  // console.log(`New Array : ${newArr}`);

  // State
  state = {
    user : [{ id:12 , name:"Yash" , password:"ypfh7@#$16" },
            { id:42 , name:"Man" , password:"mpfh7@#$07" },
            { id:62 , name:"Jaimin" , password:"jufh7@#$23" }
            ],
    isLoggedIn : false
  }
  
  const stateArray = state.user;

  return (
    <>
    <div className='m-10 text-2xl font-bold flex flex-col gap-4'>

      {/* Bad Practice */}
      <ol>
        <h1>Bad Practice</h1>
        <li>{arr[0]*2}</li>
        <li>{arr[1]*2}</li>
        <li>{arr[2]*2}</li>
        <li>{arr[3]*2}</li>
        <li>{arr[4]*2}</li>
      </ol>

      {/* Good Practice */}
      <div>
        <h1>Good Practice</h1>
        {newArr}
      </div>

      <ul>
        {/* Bad Practice */}
        {arr.map((num) => { return <li>{num*2}</li>})}
      </ul>

      <ul>
        {/* Good Practice */}
        {arr.map((num) => <li>{num*2}</li>)}
      </ul>

      <ul> 
        {/* Map with Props */}
        {names.map((name) => <li>{name}</li>)}
      </ul>

      <div className='flex flex-col gap-6'>
        {/* Map with State */}

        {/* Bad Practice */}
        <div className='bg-yellow-500 w-max p-3'>
          <h1>Index : 0</h1>
          <h1>{state.user[0].id}</h1>
          <h1>{state.user[0].name}</h1>
          <h1>{state.user[0].password}</h1>
        </div>

        <div className='bg-orange-500 w-max p-3'>
          <h1>Index : 1</h1>
          <h1>{state.user[1].id}</h1>
          <h1>{state.user[1].name}</h1>
          <h1>{state.user[1].password}</h1>
        </div>

        <div className='bg-green-600 w-max p-3'>
          <h1>Index : 2</h1>
          <h1>{state.user[2].id}</h1>
          <h1>{state.user[2].name}</h1>
          <h1>{state.user[2].password}</h1>
        </div>

        {/* Good Practice */}
        <div>
          {stateArray.map((initail) => {return <li>{initail.id} , {initail.name} , {initail.password} </li>})}
        </div>

      </div>

    </div>
    </>
  )
}