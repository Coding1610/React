/* LSU

import React, { Component } from 'react'
import Guest from './Guest'

export default class User extends Component {
  render() {
    return (
        <>
        <div>
            <h1 className='text-pink-500'> <span className='text-black'>User :</span> {this.props.value}</h1>
            <Guest value={this.props.value}/>
        </div>
        </>
    )
  }
}

*/


import React, { Component } from 'react'
import Guest from './Guest'

export default class User extends Component {
  render() {
    return (
    <>
      <div>
        <h1>User Component</h1>
        <Guest/>
      </div>
    </>
    )
  }
}
