import React, { Component } from 'react'

export default class App extends Component {

  // Constructor
  constructor(props){
    super(props);
    this.newRef = null;

    // Callback
    this.setnewRef = (e) => {
      this.newRef = e;
    }
  }

  // Handler
  componentDidMount = () => {
    if(this.newRef){
      this.newRef.focus();
    }
  }

  render() {
    return (
      <>
      <div className='m-10'>
        <form>
          <label className='font-bold text-2xl'>UserID : </label>
          <input type="text" className='bg-slate-200 text-2xl p-2' name='name'/>
          <br />
          <br />
          <label className='font-bold text-2xl'> Password : </label>
          <input type="text" className='bg-slate-200 text-2xl p-2' name='password' ref={this.setnewRef}/>
          <br />
          <br />
        </form>
      </div>
      </>
    )
  }
}