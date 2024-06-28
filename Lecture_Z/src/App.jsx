/* LSU 

import React, { Component } from 'react'
import User from './User'

export default class App extends Component {

  //State
  state={
    value:"Yashu"
  }

  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl'>
        <h1 className='text-pink-400'> <span className='text-black'>App :</span> {this.state.value}</h1>
        <User value={this.state.value}/>
      </div>
      </>
    )
  }
}

*/

import React, { Component } from 'react'
import User from './User';
export const myContext = React.createContext(/*Default Value*/);

export default class App extends Component {

  // State
  state={
    name:"Yashu",
    number:0,
    car:"Lamborghini"
  };

  upCount = () => {
    this.setState({number:this.state.number+1});
    // console.log("OK");
  };

  render() {

    const newObject = {
      value:this.state,
      functionName:this.upCount
    };

    return (
      <div className='m-10 font-bold text-2xl text-purple-600'>
        <h1> App Component </h1>
        <myContext.Provider value={newObject}>
          <User/>
        </myContext.Provider>
      </div>
    )
  }
}
