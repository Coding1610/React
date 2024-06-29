import React, { Component } from 'react'
import HOC from './HOComponent'

class Component_1 extends Component {
  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl'>
        <h1 onMouseOver={this.props.handleincome}> {this.props.name} : Monthly Income : {this.props.Income} </h1>
      </div>
      </>
    );
  }
}

export default HOC(Component_1,150000);