# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Update/Modify State_

# 1. Arg : Object
<h3>Syntax</h3>

this.setState({key:"value"});

# 2. Arg : Function
<h3>Syntax</h3>

this.setState(function(state,props){});

1. It accepts a function rather than an object
2. It recives the previous state as the first argument.
3. The Props at the time the update is applied as the second argument.