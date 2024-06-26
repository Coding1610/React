import React, { Component } from 'react'

/* Input

export default class App extends Component {

  state={
    value:""
  }

  handleChange = (event) => {
    // console.log("Event Handler called on every change");
    // console.log(event);
    // console.log(event.target.value);
    this.setState({value:event.target.value.toLowerCase().substr(0,20)})
  };

  render() {
    return (
      <>
      <div className='m-10'>
        <form>
          <h1 className='text-2xl font-bold m-2'> Controlled By React </h1>
          <input type="text" className='bg-slate-200 text-2xl p-2' value={this.state.value} placeholder='type anything..' onChange={this.handleChange}/>
        </form>
      </div>
      </>
    )
  }
}

*/


/* Textarea

export default class App extends Component {

  state={
    value:""
  }

  handleChange = (evt) => {
    // console.log("Event Fire");
    // console.log(evt.target.value);
    this.setState({value:evt.target.value.toLowerCase()});
  };

  render() {
    return (
      <>
      <div className='m-10'>
        <form>
          <textarea placeholder='write anything...' value={this.state.value} cols="30" rows="10" className='bg-slate-100 p-2' onChange={this.handleChange}></textarea>
        </form>
      </div>
      </>
    )
  }
}

*/


/* Multiple Inputs

export default class App extends Component {

  state={
    name:"",
    password:""
  }

  // --> Bad Practice

  // handleChangeName = (e) => {
  //   this.setState({name:e.target.value.toLowerCase().substr(0,10)});
  // };

  // handleChangePassword = (e) => {
  //   this.setState({password:e.target.value.toLowerCase().substr(0,10)});
  // };

  // --> Good Practice

  handleChange = (e) => {
    // console.log([e.target.name]);
    const value = e.target.name === 'password' ? e.target.value.toUpperCase() : e.target.value.toLowerCase();
    this.setState({[e.target.name]:value});
  };

  render() {
    return (
      <>
      <div className='m-10'>
        <form>
          <label className='font-bold text-2xl'>UserID : </label>
          <input type="text" value={this.state.name} className='bg-slate-200 text-2xl p-2' name='name' onChange={this.handleChange}/>
          <br />
          <br />
          <label className='font-bold text-2xl'> Password : </label>
          <input type="text" value={this.state.password} className='bg-slate-200 text-2xl p-2' name='password' onChange={this.handleChange}/>
        </form>
      </div>
      </>
    )
  }
}

*/


// Form

export default class App extends Component {

  state={
    name:"",
    password:""
  }

  handleChange = (e) => {
    const value = e.target.name === 'password' ? e.target.value.toUpperCase() : e.target.value.toLowerCase();
    this.setState({[e.target.name]:value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target[0].type);
    console.log(event.target[1].value);
    console.log(event.target[2].type);
  };

  render() {
    return (
      <>
      <div className='m-10'>
        <form onSubmit={this.handleSubmit}>
          <label className='font-bold text-2xl'>UserID : </label>
          <input type="text" value={this.state.name} className='bg-slate-200 text-2xl p-2' name='name' onChange={this.handleChange}/>
          <br />
          <br />
          <label className='font-bold text-2xl'> Password : </label>
          <input type="text" value={this.state.password} className='bg-slate-200 text-2xl p-2' name='password' onChange={this.handleChange}/>
          <br />
          <br />
          <input type="submit" value="Submit" className='bg-slate-200 text-2xl font-sans font-thin p-3 cursor-pointer'/>
        </form>
      </div>
      </>
    )
  }
}