import React, { PureComponent } from 'react';

class Class_Comp extends PureComponent{

    // Constructor
    constructor(props){
        super(props);
        this.state = {
            name:"Yash",
            id_1:19,
            id_2:23,
            number:this.props.Number
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // Arrow
    handleEvent_1 = () => {
        console.log("Green-Blue" , this);
    }

    // Function
    handleEvent_2(Name,Number,e){
        console.log("Green-Blue",this);
        console.log(e);
        console.log(Name);
        console.log(Number);
    }

    // Passing Argument : Arrow Function
    handleEvent_3(id1,id2,name,str,num,e){
        console.log(id1);
        console.log(id2);
        console.log(name);
        console.log(str);
        console.log(num);
        console.log(e);
    }

    handleEvent_3Arg = (e) => {
        // Return
        this.handleEvent_3(this.state.id_1,this.state.id_2,this,this.state.name,"009",123,e);
    }
    

    render(){
        return(
            <>
            <div className='m-10 gap-3 flex-col flex'>
                <h1 className='text-2xl font-bold'>Event - {this.props.name} & {this.state.number}</h1>
                
                <button className='text-blue-700 bg-lime-500 font-bold p-10 hover:text-lime-500 hover:bg-blue-700 text-2xl' onClick={this.handleEvent_3Arg}> Click Me C </button>
                
                {/* Passing Argument : Arrow Function */}
                <button className='text-blue-700 bg-lime-500 font-bold p-10 hover:text-lime-500 hover:bg-blue-700 text-2xl' onClick= { e => {
                    this.handleEvent_3(this.state.id_1,this.state.id_2,this,this.state.name,"009",123,e)}}> Click Me C </button>

                {/* Passing Argument : Bind Method */}
                <button className='text-blue-700 bg-lime-500 font-bold p-10 hover:text-lime-500 hover:bg-blue-700 text-2xl' onClick={this.handleEvent_2.bind(this,this.state.name,972782)}> Click Me C </button>

            </div>
            </>
        )
    }
}

export default Class_Comp