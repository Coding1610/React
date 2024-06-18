import React, { PureComponent } from 'react';

class Class_Comp extends PureComponent{

    // Constructure
    constructor(props){
        super(props);
        this.state={
            name:"State",
            click:"Click"
        }
    }

    handleEvent = () => {
        this.setState(
            {name:"Set State",click:"Clicked"}
        )
        this.setState(function(state,props){
            console.log(state);
            console.log(props);
            console.log(props.html); 
        });
    }

    render(){
        return(
            <>
            <div className='m-10'>
                <h1 className='text-2xl font-bold'>{this.state.name}</h1>
                <button className='bg-yellow-400 text-red-800 p-5 font-bold text-2xl' onClick={this.handleEvent}>{this.state.click}</button>
            </div>
            </>
        )
    }
}

export default Class_Comp