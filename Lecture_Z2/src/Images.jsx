import React, { Component } from 'react'

export default class Images extends Component {
  render() {

    if( this.props.car === "No Iamge"){
      throw new Error("No Image Path Found");
    }

    return (
        <>
        <img src={this.props.car} className='w-96'/>
        </>
    )
  }
}