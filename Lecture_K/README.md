# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

_Lifecycle Method : Unmounting_

1. Unmounting is the process of removing component from DOM.
2. The method is called when a component is being removed from the DOM,

--> componentWillUnmount()


_componentWillUnmount()_

1. It is invoked immediately before a component is unmounted and destroyed.
2. Perform any necessary cleanUp in this method, such as invalidating timers , canceling network.
3. This is executed just before the component get removed from the DOM.

4. componentWillUnmount(){}