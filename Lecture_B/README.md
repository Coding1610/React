# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Function Component & Class Component_

# 1. Functional Components

<<<<<<< HEAD
<h3> Synax <h3>

=======
# Syntax
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
function Comp_Name(props){
        return(
            <>
            </>
        )
    }
<<<<<<< HEAD

1. Comp. ae js function jevu j che.
2. With arg. "Props(Object)".
3. It return JSX / HTML. 
4. Access : props.key.

# 2. Class Components

<h3> Synax <h3>

=======
    
--> Comp. ae js function jevu j che
--> with arg. "Props(Object)"
--> it return JSX / HTML 
--> access : props.key

# 2. Class Components

# Syntax
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
class Comp_Name extends PureComponent{
        render(){
            return(
                <>
                </>
            )
        }
    }
<<<<<<< HEAD

1. Same as js class.
2. No arg.
3. It return JSX / HTML.
4. Access : this.props.key.

#3. Composing Components

<h3> Synax <h3>

=======
    
--> same as js class
--> no arg.
--> it return JSX / HTML
--> access : this.props.key

# 3. Composing Components

# Syntax
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
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

1. Components can refer to other components in thier output.
2. This let us use the same output abstraction for any level of detail.

# 4. When Use Function Comp.
<<<<<<< HEAD

1. Use functional comp if u arre writing a presentational comp. which does not have its own state or needs to access a lifecycle hook. You cannot use setState() in ur comp. because Functional Comp. are plain JavaScript Function.
=======
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8

# 5. When Use Class Comp.

<<<<<<< HEAD
1. Use class comp. if u need state or need to access lifecycle hook because all lifecycle hooks are coming from React.Component which you extend from in class component.

# 6. Props

<h3> Synax <h3>

=======
# 5. When Use Class Comp.

--> Use class comp. if u need state or need to access lifecycle hook because all lifecycle hooks are coming from React.Component which you extend from in class component.

# 6. Props

# Syntax
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
function Component(props){
    return(
        <h1> hello {props.name} </h1>
    )
}

<<<<<<< HEAD
<h3> Synax <h3>

=======
# Syntax
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
function App(){
    return(
        <>
        <Component name="Yash"/>
        </>
    )
}

<<<<<<< HEAD
1. When React sees an element representing a user defined component, it passes JSX attribute to this Component as a single Object. We call this object "props".
2. same for class & function.
3. Whether you declare a component as a function or a class, it must never modify its own props.
4. All React Components must act like pure function with repect to their props.
5. Props are "READ-ONLY".
=======
--> When React sees an element representing a user defined component, it passes JSX attribute to this Component as a single Object. We call this object "props".
--> same for class & function
--> Whether you declare a component as a function or a class, it must never modify its own props.
--> All React Components must act like pure function with repect to their props.
--> Props are "READ-ONLY".
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
