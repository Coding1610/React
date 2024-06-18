import React from 'react'

function Function_Comp(props){

    return(
        <>
        <main className="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 border-x-8 border-y-8 m-6">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">{props.number}</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{props.title}</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">{props.msg}</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.btn}</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">{props.about}<span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </main>
        </>
    )
}

export default Function_Comp