import React from 'react'
import PropTypes from 'prop-types'

function Header(props){

    return(

        <>
            <h1>Hello {props.ptName} </h1>
            <h1>Hello {props.ptNumber}</h1>
            <h1>Hello {props.ptArray}</h1>
            <h1>Hello {props.ptObject}</h1>
            <h1>Hello {props.ptFunction}</h1>
            <h1>Hello {props.ptBool}</h1>
        </>

    )
}

Header.propTypes = {
    ptName : PropTypes.string.isRequired,
    ptNumber : PropTypes.number,
    ptArray : PropTypes.array,
    ptFunction : PropTypes.func,
    ptBool : PropTypes.bool
}

Header.defaultProps = {
    ptName:"Nothing"
}

export default Header;