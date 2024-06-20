# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

_Function Component & Class Component_


1. Functional Components

--> function Comp_Name(props){
        return(
            <>
            </>
        )
    }
--> Comp. ae js function jevu j che
--> with arg. "Props(Object)"
--> it return JSX / HTML 
--> access : props.key


2. Class Components

--> class Comp_Name extends PureComponent{
        render(){
            return(
                <>
                </>
            )
        }
    }
--> same as js class
--> no arg.
--> it return JSX / HTML
--> access : this.props.key


3. Composing Components

function App(){
    return(
        <>
        <Component/>
        <Component/>
        <Component/>
        <Component/>
        </>
    )
}

--> Components can refer to other components in thier output.
--> This let us use the same output abstraction for any level of detail.


4. When Use Function Comp.

--> Use functional comp if u arre writing a presentational comp. which does not have its own state or needs to access a lifecycle hook. You cannot use setState() in ur comp. because Functional Comp. are plain JavaScript Function.


5. When Use Class Comp.

--> Use class comp. if u need state or need to access lifecycle hook because all lifecycle hooks are coming from React.Component which you extend from in class component.


6. Props

function Component(props){
    return(
        <h1> hello {props.name} </h1>
    )
}

function App(){
    return(
        <>
        <Component name="Yash"/>
        </>
    )
}

--> When React sees an element representing a user defined component, it passes JSX attribute to this Component as a single Object. We call this object "props".
--> same for class & function
--> Whether you declare a component as a function or a class, it must never modify its own props.
--> All React Components must act like pure function with repect to their props.
--> Props are "READ-ONLY".