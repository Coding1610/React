# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Error Boundaries_

1. Error boundaries are React Components that catch JS errors anywhere in their child Component tree, log those error, and display a fallback UI instead of the component tree that crashed.
2. Error boundaries cattch error during rendering, in lifecycle method, and in Constructor of the whole tree below them.
3. A class component become an error boundary if it defines either(or both) of the lifecycle method _static getDerivedStateFromError()_ or __componentDidCatch()_.

# _Error Boundaries doo not catch error for_

1. Event Handler
2. Asynchronous code
3. Server Side Rendering
4. Errors thrown in the error boundary itself

# _static getDerivedStateFromError()_

1. This lifecycle method is invoked after an error has been thrown by a descendant component.
2. It receives the error that was thrown as a parameter and should return a value to update state.
3. Use this method to render a fallback UI after an error has been thrown.

<h3> Syntax </h3>

static getDerivedStateFromError(error){};

# _componentDidCatch()_

1. This lifecycle method is invoked after an error has been thrown by a descendant component.
2. Use this methdo to log error information.

<h3> Syntax </h3>

componentDidCatch(error,information){};