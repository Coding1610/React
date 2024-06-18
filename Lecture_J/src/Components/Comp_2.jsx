import React, { Component } from 'react'

export default class Comp_2 extends Component {

  // Constructor
  constructor(props){
    super(props);
    this.state={
      Roll:this.props.roll,
      name:"Lipsum"
    }
  }

  // 1st Method
  static getDerivedStateFromProps(props,state){
    console.log("Get Derived State From Props Called");
    if(props.roll !== state.Roll){
      return {Roll:props.roll};
    }
    return null;
  }

  // 2nd Method
  shouldComponentUpdate(nextState,nextProps){
    console.log("Should Component Update Called");
    if( this.state.Roll < 1700 ){
      console.log("True Return");
      return true;
    }
    else{
      console.log("False Return");
      return false;
    }
  }

  // 4th Method
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Get Snapshot Before Update Called");
    console.log(prevProps,prevState);
    // return 45;
    return false;
  }

  // 5th Method 
  componentDidUpdate(prevProps,prevState,Snapshot){
    console.log("Component Did Update Called");
    console.log(prevProps,prevState,Snapshot);
  }

  // 3rd Method
  render() {
    console.log("Child Render");
    return (
        <>
        <div className='font-bold text-2xl'>
            <h1>Hello : {this.state.Roll} </h1>
        </div>
        </>
    )
  }
}
