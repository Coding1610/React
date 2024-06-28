/* LSU

import React, { Component } from 'react'

export default class Guest extends Component {
  render() {
    return (
        <>
        <div>
            <h1 className='text-pink-600'> <span className='text-black'>Guest :</span> {this.props.value}</h1>
        </div>
        </>
    )
  }
}

*/


import React, { Component } from 'react'
import { myContext } from './App'

export default class extends Component {
  render() {
    return (
    <>
    <div>
        <h1>Guest Component </h1>
        <myContext.Consumer>

            {/* { data => 
            <>
            <h1 className='text-gray-600'> Name : {data.name}</h1>
            <h1 className='text-gray-600'>Number : {data.number}</h1>
            <h1 className='text-gray-600'>Car : {data.car}</h1> 
            </>
            } */}

            { ({value,functionName}) => 
            <>
            <h1> <span className='text-black'> Name : </span> {value.name}</h1>
            <h1> <span className='text-black'> Number : </span>{value.number}</h1>
            <h1> <span className='text-black'> Car : </span>{value.car}</h1>
            <button onClick={functionName} className='p-3 bg-yellow-400 rounded-md hover:bg-yellow-300 text-black hover:shadow-xl'> Change Number </button>
            </>}
        </myContext.Consumer>
    </div>
    </>
    )
  }
}
