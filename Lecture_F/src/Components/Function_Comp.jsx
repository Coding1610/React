import React from 'react'

function Function_Comp(props){

    function handleEvent(evt){
        evt.preventDefault();
        console.log("Purple-Yellow");
    }
    
    return(
        <>
        <div className='m-10 gap-3 flex-col flex'>
            <h1 className='text-2xl font-bold'>Event - {props.name} & {props.Number}</h1>
            <a href='https://google.com' className='text-yellow-500 bg-purple-800 hover:bg-yellow-500 hover:text-purple-800 p-10 font-bold text-2xl' onClick={handleEvent}> Click Me F </a>
        </div>
        </>
    )
}

export default Function_Comp