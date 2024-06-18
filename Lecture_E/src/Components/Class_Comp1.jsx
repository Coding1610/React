import React, { PureComponent } from 'react';

class Class_Comp1 extends PureComponent{

    constructor(props){
        
        // Call Parent Constructor
        super(props)

        // State
        this.state={
            name:"Yash",
            number:1610,
            arr:[9,7,2,7,5,7,2,7,8,2],
            num:this.props.Number
        };
    }

    render(){
        return(
            <>
            <div className='m-10'>
                <h1>Hello {this.state.name}</h1>
                <h1>Hii {this.props.Number}</h1>
                <h1>Hie {this.state.number}</h1>
                <h1>Hey {this.state.num}</h1>
                <h1>Hyu {this.state.arr}</h1>
            </div>
            </>
        )
    }    
}

export default Class_Comp1