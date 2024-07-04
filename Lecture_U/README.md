# Theory 

# _Form_

1. HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.
2. In HTML, form elements such as <input> , <textarea> , <select> typically maintain their own state and update it based on user input.
3. In React, Mutable(changeable) state is typically kept in the state property of components, and only updated with setState().
<br/>

<h3>Example</h3>
{

    1. Controlled Component
    2 .Uncontrolled Component
}

# _Controlled Component_

1. Form has the default HTML form behavior of browsing to a new page when the user submits the form. Ifyou want this behavior in React, it just works.
2. But in most cases, it's convienient to have a JS function entered into the form.
3. The standard way to achieve this is with a technique called "Controlled Component".
<br>

# _When Use Controlled Component_

1. You need to write an event handler for every way your data can change and pipe all of the input state through a React Component.
<br>

# _Uncontrolled Component_
 
1. In a controlled component, form data is handled by a React component.
2. The alternative is uncontrolled components, where form data is handled by the DOM itself.
3. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a "ref" to get form values from the DOM. 
<br>

# _When Use Unontrolled Component_

1. You do not need to write an event handler for every way your data can change and pipe all of the input state through a React Component.
2. Converting a preexisitng codebase to React, or intergrating a React application with a non-React Library.
