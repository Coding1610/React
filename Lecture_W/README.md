# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Uncontrolled Component_

1. In a controlled component, form data is handled by a React component.
2. The alternative is uncontrolled components, where form data is handled by the DOM itself.
3. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a "ref" to get form values from the DOM. 

# _When Use Unontrolled Component_

1. You do not need to write an event handler for every way your data can change and pipe all of the input state through a React Component.
2. Converting a preexisitng codebase to React, or intergrating a React application with a non-React Library.

# _Ref's_

1. Refs provide a way to access DOM nodes or React elements created in the render method.

# _When to use Ref's_

1. Managing Focus , Text Selection , Media Playback.
2. Triggering Imperative Animations.
3. Integrating with Third-Party DOM Libraries.

# _Creating Ref's_

1. Ref's are created using React.createRef() and attached to React elements via the "ref" attribute.
2. Ref's are commonly assigned to an instance property when a componenet is constructed so they can be referenced throughout the componenet.

<h3>Syntax</h3>

this.myRef = React.createRef();
render(){
    return <div ref={this.myRef}> </div>;
}

# _Accessing Ref's_

1. When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.

<h3>Syntax</h3>

const node = this.myRef.current;

2. React will assign the current property with the DOM element when the component Mounts, and assign it back to NULL when it Unmount.
3. The value of the ref depending on type of the node :

<h3>Example</h3>

1. When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() recevies the underlying DOM element as its current property.
2. When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.
3. You may not use the ref attribute on function component because they don't have instance.