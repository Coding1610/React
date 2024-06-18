import React, { PureComponent } from 'react';

class Class_Comp extends PureComponent{

    // State
    state = {
        name:"Yash",
        num:16,
        number:this.props.Number,
        arr:["A,","B,","C"]
    };

    render(){
        return(
            <>
            <div className='m-10'>
                <h1>Hello {this.state.name}</h1>
                <h1>Your Lucky Number is {this.props.Number}</h1>
                <h1>Your Lucky Number is {this.state.num}</h1>
                <h1>Your Lucky Number is {this.state.number}</h1>
                <h1>Array : {this.state.arr}</h1>
            </div>
            </>
        )
    }
}

export default Class_Comp