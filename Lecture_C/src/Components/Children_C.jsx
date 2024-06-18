// import React from 'react'
import React, { PureComponent } from 'react';

class Children_C extends PureComponent {

    render() {
        return (
            <>
            <div className='m-10'>
                <h1>Hello {this.props.children}</h1>
                <h1>1 {this.props.children}</h1>
                <h1>2 {this.props.children}</h1>
                <h1>3 {this.props.children}</h1>
            </div>
            </>
        );
    }
}
export default Children_C
