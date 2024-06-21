import React, { PureComponent } from 'react';

/* Ex : 1 : If

export default function Guest(props) {
  return (
    <>
    <div className='m-10 font-bold text-2xl flex flex-col w-max gap-3'>
        <h1> Welcome Guest </h1>
        <button className='p-3 bg-blue-300 rounded-lg hover:bg-blue-400'> Login </button>
        <button className='p-3 bg-blue-300 rounded-lg hover:bg-blue-400'> Signup </button>
    </div>
    </>
  )
}
*/


/* Ex : 3 If Else

export default class Guest extends PureComponent {
  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl flex flex-col gap-3 w-max'>
        <h1>Welcome Guest</h1>
        <button className='bg-lime-400 hover:bg-lime-500 p-3 rounded-lg' onClick={this.props.clickData}>Login</button>
        <button className='bg-lime-400 hover:bg-lime-500 p-3 rounded-lg'>Signup</button>
      </div>
      </>
    )
  }
}
*/


/* Ex : 4 : Inline Ef Else

export default class Guest extends PureComponent {
  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl flex flex-col gap-3 w-max'>
        <h1>Welcome Guest</h1>
        <button className='bg-yellow-500 hover:bg-yellow-400 p-3 rounded-lg' onClick={this.props.clickData}>Login</button>
        <button className='bg-yellow-500 hover:bg-yellow-400 p-3 rounded-lg'>Signup</button>
      </div>
      </>
    )
  }
}
*/


/* Ex : 5 : IIFE's

export default class Guest extends PureComponent {
  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl flex flex-col gap-3 w-max'>
        <h1>Welcome Guest</h1>
        <button className='bg-red-500 hover:bg-red-400 p-3 rounded-lg text-white' onClick={this.props.clickData}>Login</button>
        <button className='bg-red-500 hover:bg-red-400 p-3 rounded-lg text-white'>Signup</button>
      </div>
      </>
    )
  }
}
*/