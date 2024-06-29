import React, { Component } from 'react'

export default class Error extends Component {

    state={
        hasError:false
    };

    // Method 1
    static getDerivedStateFromError(error){
        return { hasError:true };
    };

    // Method 2
    componentDidCatch(error,info){
        // console.log(error);
        console.log(info);
    };

    render() {

    if(this.state.hasError){
        return (
            <>
            <h1>Error : Image Not Found</h1>
            </>
        )
    }
    return this.props.children;
  }
}