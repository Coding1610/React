# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

1. Type-Chceking : Props-Type

--> If u want to make restriction on props key/value then u can.

import PropTypes from 'prop-types'

function Comp(props){
    return(
        <>
        </>
    )
}

Comp.propTypes = {
    keyName : PT.string,
    keyName : PT.number,
    keyName : PT.func,
    keyName : PT.bool,
    keyName : PT.array
    ...
}

--> If u want ki ye key/value to aani hi chahiye then,

Comp.propTypes = {
    keyName : PT.string,
    keyName : PT.number,
    keyName : PT.func.isRequired,
    keyName : PT.bool,
    keyName : PT.array
    ...
}

--> Default Props,

Comp.defaultProps = {
    keyName : "Yash",
    keyName : 1610,
    ...
}

--> If u not follow this step then console give warning.