# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

_Custom Hook_

1. A custom hook is a JavaScript Function.
2. When we want to share Logic between two JavaScript functions, we extract it to third function.
3. You can write custom hooks that cover a wide range of use cases like Form Handling , Animation , Declarative Subscription , Timers and many more.


_Creating Custom Hook_

1. A custom Hook is a JS function whose name starts with "use" and that may call other Hooks.
2. Example,
    
Custom Hook : { function useSomething(){return;} }
Use Of Custom Hook : { const data = useSomething(); } 
