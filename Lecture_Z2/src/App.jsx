import React, { Component } from 'react'
import Images from './Images'
import pic1 from './assets/Vintage_1.jpg'
import pic2 from './assets/Vintage_2.jpg'
import Error from './Error'

export default class App extends Component {
  render() {
    return (
      <>
      <div className='m-10 font-bold text-2xl flex flex-col gap-3'>

        <Error>
        <Images car={pic1}/>
        </Error>

        <Error>
        <Images car={pic2}/>
        </Error>

        <Error>
        <Images car="No Iamge"/>
        </Error>
        
      </div>
      </>
    )
  }
}