import React, { Component } from 'react'
import Comp_2 from './Comp_2';

class Class_Comp extends Component {

  // Constructor
  constructor(props){
    super(props);
    this.state={
      name:"Yash",
      age:20,
      number:1610
    }
  }

  // Event
  handleButton = () => { 
    console.log("Button Clicked");
    this.setState({number:this.state.number+50});
  };

  render(){
    console.log("Parent Render");
    return (
        <>
        <div className='m-10 font-bold text-2xl'>
          <h1>{this.state.number}</h1>
          <button className='p-3 bg-red-400 hover:bg-red-500' onClick={this.handleButton}>Change</button>
          <Comp_2 roll={this.state.number}/>
          <h1>{this.state.number}</h1>
        </div>
        </>
    )
  }
}

export default Class_Comp