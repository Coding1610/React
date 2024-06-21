import User from './User'
import Guest from './Guest'
import { useState } from 'react'
import React, { PureComponent } from 'react';


/* Ex : 1 : If

export default function App(props) {

  // const isRegistered = props.consumer;
  const isRegistered = true;

  if( isRegistered ){
    return <User/>
  }

  return <Guest/>
}
*/


/* Ex : 2 : Inline If & Logical Op.

export default function App(props) {

  // const prime = props.primeMember;
  const prime = true;

  return (
    <>
      <h1 className='m-10 font-bold text-2xl'>Welcome Yash Prajapati</h1>
      {prime && <User/>}
    </>
  )
}
*/


/* Ex : 3 : If Else

export default class App extends PureComponent {

  state={
    isLoggedIn:false
  }

  ClickDataIn = () => {
    this.setState({isLoggedIn:true});
  };

  ClickDataOut = () => {
    this.setState({isLoggedIn:false});
  };

  render() {

    const isLogged = this.state.isLoggedIn;

    if(isLogged){
      return <User clickData={this.ClickDataOut}/>
    }
    else{
      return <Guest clickData={this.ClickDataIn}/>
    }

  }
}
*/


/* Ex : 4 : Inline If Else

export default class App extends PureComponent {

  state={
    isLoggedIn:false
  }

  ClickDataIn = () => {
    this.setState({isLoggedIn:true});
  };

  ClickDataOut = () => {
    this.setState({isLoggedIn:false});
  };

  render() {

    const isLogged = this.state.isLoggedIn;

    return(
      <>
      {isLogged ? <User clickData={this.ClickDataOut}/> : <Guest clickData={this.ClickDataIn}/>}
      </>
    )

  }
}
*/


/* Ex : 5 : IIFE's

export default class App extends PureComponent {

  state={
    isLoggedIn:false
  }

  ClickDataIn = () => {
    this.setState({isLoggedIn:true});
  };

  ClickDataOut = () => {
    this.setState({isLoggedIn:false});
  };

  render() {

    const isLogged = this.state.isLoggedIn;

    return(
      <>
      {
        ( () => {

          if(isLogged){
            return <User clickData={this.ClickDataOut}/>
          }
          else{
            return <Guest clickData={this.ClickDataIn}/>
          }

        })()
      }
      </>
    )

  }
}
*/