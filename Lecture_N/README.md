# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Hook : useEffect()_

1. use Effect is hook for encapsulating code that has 'side effects'.
2. If you are know React class lifecycle methods, you can think of useEffect hook as componentDidMount() , componentDidUpdate() , componentWillUnmount() Combined.

<h3>Syntax</h3>

1. useEffect(Function)
2. useEffect(Function,Array)

3. The function passed to hook will run after render is committed to the screen.
4. Second Argument yo hook that is the array of values that the effect depends on.
5. You can call useEffect as many times as you want.

<h3>Syntax</h3>

useEffect( () => { functionCall() } , [depe_1 , depe_2 , depe_3 ..] );

6. Page Load hone pe first time call hoga & Change of any dependencies par call hoga.
7. It is call functionCall() on change of every Dependencies.

# _What Does useEffect() do_

1. By using thishook, you tell your component needs to do something after render.
2. React will remember the function you passed and call is later aftter performing the DOM updates.
3. In this effect, we set the Document Title, we could also perform data fetching or call some other imperative API.
4. Component Mount , Update & Unmount pe Call hoga.

# _Why is useEffect() called inside a Component_

1. Placing hook inside the component lets us access the state variable or any props right from the Effect.