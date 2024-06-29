# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Controlled Component_

1. Form has the default HTML form behavior of browsing to a new page when the user submits the form. Ifyou want this behavior in React, it just works.
2. But in most cases, it's convienient to have a JS function entered into the form.
3. The standard way to achieve this is with a technique called "Controlled Component".

# _When Use Controlled Component_

1. You need to write an event handler for every way your data can change and pipe all of the input state through a React Component.