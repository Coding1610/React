import React, { PureComponent } from 'react';

class App2 extends PureComponent {
  
    componentDidMount(){
        console.log("App2 Mounted");
    }
    componentWillUnmount(){
        console.log("App2 Unmounted")
    }
    render(){
        console.log("App2 Rendered");
    return (
        <>
            <div className='m-10 text-2xl font-bold'>
                <h1>App2</h1>
            </div>
        </>
  )
    }
}

export default App2