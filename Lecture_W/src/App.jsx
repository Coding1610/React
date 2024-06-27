import React, { Component } from 'react'

/* Ex : 1 

export default class App extends Component {

  // Constructor
  constructor(props){
    super(props);

    // Ref
    this.newRef = React.createRef();
  }

  componentDidMount = () => {
    // console.log(this.newRef);
    // console.log(this.newRef.current);
    this.newRef.current.focus();
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
          <input type="text" className='bg-slate-200 text-2xl p-2' name='password' ref={this.newRef}/>
          <br />
          <br />
          <label className='font-bold text-2xl'> Address : </label>
          <input type="text" className='bg-slate-200 text-2xl p-2' name='address'/>
          <br />
          <br />
        </form>
      </div>
      </>
    )
  }
}

*/


// Ex : 2 

export default class App extends Component {

  // State
  state={
    valueIP:""
  }

  // Constructor
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({valueH1:this.myRef.current.value});
  };

  render() {
    return (
      <>
      <div className='m-10'>
        <h1 className='text-2xl font-sans font-bold mb-5 text-slate-700'> You Typed : {this.state.valueH1}</h1>
        <form onSubmit={this.handleSubmit}>
          <label className='font-bold text-2xl'> Input : </label>
          <input type="text" className='bg-slate-200 text-2xl p-2 text-wrap' name='password' placeholder='type something...' ref={this.myRef}/>
          <br/>
          <br/>
          <input type="submit" value="Submit" className='bg-slate-200 text-2xl font-sans font-thin p-3 cursor-pointer hover:bg-slate-500 hover:text-white duration-200'/>
        </form>
      </div>
      </>
    )
  }
}