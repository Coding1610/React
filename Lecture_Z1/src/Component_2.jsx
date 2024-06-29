import React, { Component } from 'react'
import HOC from './HOComponent'

class Component_2 extends Component {
  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl'>
        <h1 onMouseOver={this.props.handleincome}> {this.props.name} : Yearly Income : {this.props.Income} </h1>
      </div>
      </>
    );
  }
}

export default HOC(Component_2,1800000);