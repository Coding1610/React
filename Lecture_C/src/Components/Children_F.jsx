import React from 'react'

function Children_F(props){

    return(
        <>
        <div className='m-10'>
            <h1> Hello {props.children} </h1>
            <h1> How Are You ? </h1>
            <p>{props.children}</p>
            <p>{props.children}</p>
        </div>
        </>
    )
}

export default Children_F