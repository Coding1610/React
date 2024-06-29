# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Callback Ref's_

1. React also supports another way to set refs called "callback refs", which gives more fine-grain control over when refs are set and unset.
2. Instead of passing a ref attribute created by createRef(), you pass a function.
3. The function recevies the React component instance of HTML DOM element as its argument, which can be stored and accessed elsewhere.