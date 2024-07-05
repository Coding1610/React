# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Type-Chceking : Props-Type_

# 1. If u want to make restriction on props key/value then u can.

<h3>Syntax</h3>
{

    import PropTypes from 'prop-types'
    function Comp(props){
        return(
            <>
            </>
        )
    }
}

{

    Comp.propTypes = {
        keyName : PT.string,
        keyName : PT.number,
        keyName : PT.func,
        keyName : PT.bool,
        keyName : PT.array
        ...
    }
}

# 2. If u want ki ye key/value to aani hi chahiye then.

<h3>Syntax</h3>
{

    Comp.propTypes = {
        keyName : PT.string,
        keyName : PT.number,
        keyName : PT.func.isRequired,
        keyName : PT.bool,
        keyName : PT.array
        ...
    }
}

# 3. Default Props,

<h3>Syntax</h3>
{

    Comp.defaultProps = {
        keyName : "Yash",
        keyName : 1610,
        ...
    }
}

# 4. If u not follow this step then console give warning.
