# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

1. JavaScript XML (JSX)

--> JSX stands fro JS XML. It is syntax extension to JS.
--> JSX is a preprocessor step that adds XML syntax to JS.
--> JSX produce React "elements". It is possible to create element without JSX but JSX makes React a lot more elegant.
--> It is recommended to use JSX with React to describe what the UI should look like.
--> JSX is easier to read and write. Babel transform these expressions into a actual JS code.
--> It also allows React to show more useful error and warning messages.

--> Examples : Babel Parse A to B

A. const el = <h1> Hello Yash </h1>
B. React.CreateElement("h1" , null , "Hello Yash");

A. const el = <h1 className = "bg" > Hello </h1>
B. ("h1" , {className:"bg"} , "Hello");

A. const el = <h1> Hello {name} </h1>
B. ("h1" , null , "Hello" , name );

A. const el = <Component/>
B. (Component , null);

A. const el = <Component name="Yash"/>
B. (Component , {name:"Yash"}); <Component/>


2. JS Expressions 

--> We put any valid JS expression inside the curly braces in JSX. You can pass any JS expression as children, by enclosing it with {}.


3. Specifying Attributes with JSX

--> You may use quotes to specify string literals as attributes.
--> <tag attributeName = "value"> Hello </tag>

--> Since JSX is closer to JS than to HTML , React DOM uses camelCase Property naming Convention insted of HTML attribute names.


4. Children in JSX

--> In JSX expression that contain both an opening tag and a closing tag, the content between those tags in passed as a special prop,

--> prop : props.children

--> <h1> Yashu </h1>
--> Here children = "Yashu".