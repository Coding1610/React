# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Declaring State_

# _Hook : useState()_

1. useState() is a hook that allows you add React state to function Component.
2. We call it inside a function component to add some local state to it.
3. useState return an array of 2 value : current state value and a function that lets you update it.
4. React will preserve this state between re-render.
5. You can call this function from Event Handler or somewhere else.

# _Bad Practice_

<h3>Syntax</h3>

const arrayName = useState("Yash");
1. Access Value : arrayName[0];
2. Access Function : arrayName[1];

# _Good Practice_

<h3>Syntax</h3>

const [name,setName] = useState("Yash");

Here state value is string , number , bool , object , array  anything..