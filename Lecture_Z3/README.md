# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Strict Mode_

1. StrictMode is a tool for highlighting potential problems in a applicatiions.
2. StrictMode does not render any visible UI.
3. It activates additional checks and warnings for its descendants.
3. StrictMode checks are run in development mode only, they do not imapact the production build.

<h3> Syntax </h3>

<React.StrictMode>
 <App/>
<React.StrictMode>

<br>

# StrickMode currently helps with : 

1. Identifying components with unsafe lifecycles
2. Warning about legacy string ref API usage
3. Warning about depreacted findDOMNode usage
4. Detecting unexpected side effects
5. Detecting legacy context API 