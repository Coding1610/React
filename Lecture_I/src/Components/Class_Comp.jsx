import React, { PureComponent } from 'react';
import Comp_2 from './Comp_2';

class Class_Comp extends PureComponent{

    // 1st Method
    constructor(props){
        super(props);
        console.log("constructor() Called 1 ");
        this.state={
            name:"Yash",
            age:20,
            number:this.props.num
        }
        // this.handleEvent = this.handleEvent.bind(this);
    }

    // 2nd Method
    static getDerivedStateFromProps(props,state){
        console.log("static getDerivedStateFromProps() Called 2 ");
        console.log(props);
        console.log(state);
        return null;
    }

    // 4th Method
    componentDidMount(){
        // get data from server and set the data to state
        console.log("componentDidMount() Called 4 ")
    }

    // 3rd Method
    render(){
        console.log("render() Called 3 ");
        return(
            <>
            <div className='m-10 text-2xl font-bold'>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.state.age}</h1>
                <h1>Number : {this.state.number}</h1>
            </div>
            < Comp_2 lastName="Toshal"/>
            </>
        )
    }
}

export default Class_Comp