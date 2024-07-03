# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Lifecycle Methods : Mounting_

1. Mounting is the process of creating an element and inserting it in a DOM Tree.
2. Following methods are called in the following order when an instance of a componenet is being created and inserted into the DOM.

<h3>Methods</h3>
1. constructor()
2. static getDerivedStateFromProps() [rarely use]
3. render()
4. componentDidMount()

# _constructor()_

1. The constructor for a React component is called before it is mounted.
2. When implementing the con. for a React.Component subclass, you should call "super(props)" before any other statement. Otherwise "this.props" will be undefined in the constructor, which can lead to bugs.
3. Constructor use for 2 Purpose Only Make States & Bind Method.
4. State & Bind Method no use avto hoy to j Con. banavvu nai to dur rehvu.

<h3>Syntax</h3>
constructor(props){
    super(props);
    this.state={
        name:"Yash",
        age:20,
        number:this.props.num
    }
    this.handleClick = this.handleClick.bind(this);
} 

# _static getDerivedStateFromProps()_

1. getDerivedStateFromProps is invoked right before calling tthe render method, both on the initial mount and pn subsequent updates. 
2. It should return an object to update the state, or null to update nothing. 
3. This method exists for rare use cases where the state depends on changes in props over time. 
4. This method does not have access to the component instance.
5. As its static method so "this" is not available inside this method.

<h3>Syntax</h3>
static getDerivedStateFromProps(props,state){}

# _render()_

1. The render() method is the only required method in a class comp. It examines this.props & this.state.
2. It return ont of the following types.

<h3>Example</h3>
1. React Element :  There are created via JSX.
2. Array and Fragment : It is return multiple elements from render.
3. Portals : It is used to render children into a diffrent DOM subtree.
4. String and Numbers : These are rendered as text nodes in the DOM.
5. Booleans or null : It renders nothing.

3. The render() method/function should be pure, Meaning that it does not modify Component State ,it return the same result each time it's invoked, and it does not directly interact with the browser.

# _componentDidMount()_

1. componentDidMount() is invoked immediately after a component is mounted(inserted into the tree), after the render() method has taken place.
2. This method is executed once in a lifecycle of a component and the first render.
3. Intialization that requires DOM nodes should go here.
4. This is where AJZX requests and DOM or state updatess should occur.
5. This method is also used for integration with other JS Frameworks and any functions with delayed execution such as setTimeout or setInterval.
6. The API calls should be made in componentDidMount method Always.

<h3>Syntax</h3>
componentDidMount(){}

Execution sequence of this 4 method,
constructor(){} --> static getDerivedStateFromProps(){} --> render(){} --> componentDidMount(){}
