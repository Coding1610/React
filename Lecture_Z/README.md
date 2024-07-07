# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Lifting State Up_

    [ Parent --> Child_1 --> Child_2 --> Child_3 --> .. --> Child_N ]

1. You want to pass data from Parent to Child_1 you can do easily with LSU.
2. You also do from Parent to Child_N with the help of LSU , but here you pass data from Parent to Child_1 to Child_2 ( Every Child ). [Bad-Practice]
3. You pass direct From Parent to Any Child in One step Using Context. [Good-Practice]

# _Context API_

1. Context provides a way to pass data through the component tree without having to pass props down manually at every level.
2. In a typical React application, data is passed top-down(parent-child) via props, but this can be cumbersome for certain types of props that are required by many components within an application.
3. Passing the inital state to React.createContext. 
4. This function then return an Object with a "Provider" and "Consumer".
5. Using the Provider component at the top of the tree and making it accept a prop called value. This value can be anything.
6. Using Consumer component anywhere below the Provider in the component tree to get a subset of the state.

# _Create Context_

1. It creates a Context Object.
2. When React renders a component that subscribes to this Context Object it will read the current context value from closest matching Provider above it in the tree.

<h3>Syntax</h3>

    const myContext = React.createContext(ProviderDefaultValue);

3. ProviderDefaultValue = It is only used when a component does not have a matching Provider above it in the tree.

<h3>Example</h3>

    1. const myContext = React.createContext('Yashu');
    2. const myContext = React.createContext(false);
    3. const myContext = React.createContext({number:10,..});

# _Context Provider_

1. Every Context Object comes with a Provider React component that allows consuming components to subscribe to context changes.
2. One Provideer can be connected to many consumers.
3. Providers can be nested to override values deeper within the tree.

<h3>Syntax</h3>

    <myContext.Provider value={some-value}/>

4. A value prop to be passed to consuming components that are descendants of this Provider.

<h3>Syntax</h3>

    <myContext.Provider value={this.state.name}>

# _Context Consumer_

1. A React component that subscribes to context changes. This lets you subscribe to a conext within a function component.
2. It Requires a function as a child. The function receives the current Context value and returns a React Node.
3. The value  argument passed to the function will be equal to the value prop of the closest Provider for this Context above in the tree.
4. If there is no Provider for this Context above, the value agrgument will be equal to the defaultValue that was passed to createContext().

<h3>Syntax</h3>

    <myContext.Consumer>
        { (value) => /* render something based on the context value */}
        { (valueName,functionName) => <> </>}
    </myContext.Consumer>       

5. valueName & functionName same as Parent Component 

# _Context Type_

1. The contextType property on a class be assigned a Context object created by React.createContext().
2. This lets you consume the nearest current value of that Context type using this.context.

<h3>Syntax</h3>

    static contextType = myContext;
