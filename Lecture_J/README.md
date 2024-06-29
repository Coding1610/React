# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Lifecycle Method : Updating_

1. Updating is the process of chnaging state and props of component and update changes to nodes already in the DOM.
2. An Update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered,

<h3>Methods</h3>

1. static getDerivedStateFromProps() [rarely use]
2. shouldComponentUpdate() [rarely use]
3. render()
4. getSnapshotBeforeUpdate() [rarely use]
5. componentDidUpdate()

# _static getDerivedStateFromProps()_

1. getDerivedStateFromProps is invoked right before calling tthe render method, both on the initial mount and pn subsequent updates. 
2. It should return an object to update the state, or null to update nothing. 
3. This method exists for rare use cases where the state depends on changes in props over time. 
4. This method does not have access to the component instance.
5. As its static method so "this" is not avilabel inside this method.
6. Jyare apde state ke props in value koi event na through
change kariye to ae potana component ma chnage thay jay , but koi child ke parent ke extend karto hoy to aema nai thay , so thats why we use this method.

<h3>Syntax</h3>

static getDerivedStateFromProps(props,state){}

# _shouldComponentUpdate()_

1. It it use to Let React know if a component's output is not affected by the current change in state or props.
2. It means should React re-render or it cann skip rendering.
3. it invoked before render() when new props or state are being received.
4. It Return TRUE by default.
5. render() will not be invoked if it Return FALSE.

<h3>Syntax</h3>

shouldComponentUpdate(nextProps,nextState){}

# _render()_

1. The render() method is the only required method in a class comp. It examines this.props & this.state.
2. It return ont of the following types.

<h3>Example</h3>

1. React Element :  There are created via JSX
2. Array and Fragment : It is return multiple elements from render.
3. Portals : It is used to render children into a diffrent DOM subtree.
4. String and Numbers : These are rendered as text nodes in the DOM.
5. Booleans or null : It renders nothing.

3. The render() method/function should be pure, Meaning that it does not modify Component State ,it return the same result each time it's invoked, and it does not directly interact with the browser.

# _getSnapshotBeforeUpdate()_

1. This method is called right before the virtual DOM is about to make chnage to the DOM (Before DOM is updated).
2. Which allows our components to capture the current values or some information from the DOM(ex. Scroll Position) before it is potentially changed.
3. Any value returned by this lifecycle will pe passed as third parameter to componentDidUpdate(){}.

<h3>Syntax</h3>

getSnapshotBeforeUpdate(prevProps,prevState){}

# _componentDidUpdate()_

1. It is invoked immediately after Updating occurs. This Method is not called for the initial render.
2. This method is used to re trigger the third party ibraries used to make sure these libraries also update and reload themselves.
3. This method will not be invoked if shouldComponentUpdate(){ return false; }.
4. If your component implements the getSnapshotBeforeUpdate() lifecycle, the value it returns will be passed as a third "snapshot" parameter to componentDidUpdate(). Otherwise parameter will be UNDEFINED.

<h3>Syntax</h3>

componentDidUpdate(prevProps,prevState,snapshot){}

--> render() , getSnapshotBeforeUpdate() , componentDidUpdate() It will not invoked if shouldComponentUpdate() return false.