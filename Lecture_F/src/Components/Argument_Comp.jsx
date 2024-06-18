import React, { PureComponent } from 'react';

class Argument_Comp extends PureComponent{

    // Constructure
    constructor(props){
        super(props);
        this.state={
            name:"Yash",
            age:20,
            number:16,
            title:"Click Me"
        }
    }

    handleEvent = (Name,Age,Number,e) => {
        this.setState({title:"Clicked"});
        console.log("All Ok");
        console.log(Name);
        console.log(Age);
        console.log(Number);
        console.log(e);
    }

    handleEventArg = (e) => {
        this.handleEvent(this.state.name,this.state.age,this.state.number,e);
    }

    render(){
        return(
            <>
            <div className='m-10 gap-4 flex flex-col'>

                <h1 className='text-2xl font-bold'>Passing Argument In Event Handlers</h1>

                {/* Passing Argument : Arrow Function 1 */}
                <button className='p-4 bg-blue-500 text-2xl font-bold text-gray-800 hover:bg-blue-300' onClick={this.handleEventArg}>{this.state.title}</button>

                {/* Passing Argument : Arrow Function 2 */}
                <button className='p-4 bg-blue-500 text-2xl font-bold text-gray-800 hover:bg-blue-300' onClick={ e => {
                this.handleEvent(this.state.name,this.state.age,this.state.number,e);}}>{this.state.title}</button>

                {/* Passing Argument : Bind Method */}
                <button className='p-4 bg-blue-500 text-2xl font-bold text-gray-800 hover:bg-blue-300' onClick={this.handleEvent.bind(this,"Man",20,"07")}>{this.state.title}</button>

            </div>
            </>
        )
    }
}

export default Argument_Comp;