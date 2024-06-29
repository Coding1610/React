# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _1. JavaScript XML [JSX]_

1. JSX stands fro JS XML. It is syntax extension to JS.
2. JSX is a preprocessor step that adds XML syntax to JS.
3. JSX produce React "elements". It is possible to create element without JSX but JSX makes React a lot more elegant.
4. It is recommended to use JSX with React to describe what the UI should look like.
5. JSX is easier to read and write. Babel transform these expressions into a actual JS code.
6. It also allows React to show more useful error and warning messages.

<<<<<<< HEAD
<h3> Example <h3>

Babel Parse A to B

A. const el = <tag> Hello Yash </tag>
B. React.CreateElement("h1" , null , "Hello Yash");

A. const el = <tag className = "bg" > Hello </tag>
B. ("h1" , {className:"bg"} , "Hello");

A. const el = <tag> Hello {name} </tag>
=======
# Example
Babel Parse A to B

A. const el = <h1Tag>Hello Yash</h1Tag>
B. React.CreateElement("h1" , null , "Hello Yash");

A. const el = <h1Tag className = "bg" > Hello </h1Tag>
B. ("h1" , {className:"bg"} , "Hello");

A. const el = <h1Tag> Hello {name} </h1Tag>
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
B. ("h1" , null , "Hello" , name );

A. const el = <Component/>
B. (Component , null);

A. const el = <Component name="Yash"/>
B. (Component , {name:"Yash"}); <Component/>

# _2. JS Expressions_ 

<<<<<<< HEAD
1. We put any valid JS expression inside the curly braces in JSX. You can pass any JS expression as children, by enclosing it with {}.
=======
# _2. JS Expressions_ 
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8

# _3. Specifying Attributes with JSX_

<<<<<<< HEAD
1. You may use quotes to specify string literals as attributes.
2. <tag attributeName = "value"> Hello </tag>.
3. Since JSX is closer to JS than to HTML , React DOM uses camelCase Property naming Convention insted of HTML attribute names.

# _4. Children in JSX_

1. In JSX expression that contain both an opening tag and a closing tag, the content between those tags in passed as a special prop,.
2. prop : props.children.
3. <tag> Yashu </tag>.
4. Here children = "Yashu".
=======
# _3. Specifying Attributes with JSX_

--> You may use quotes to specify string literals as attributes.
--> <tag attributeName = "value"> Hello </tag>
--> Since JSX is closer to JS than to HTML , React DOM uses camelCase Property naming Convention insted of HTML attribute names.

# _4. Children in JSX_

--> In JSX expression that contain both an opening tag and a closing tag, the content between those tags in passed as a special prop,
--> prop : props.children
--> <h1Tag> Yashu </h1Tag>
--> Here children = "Yashu".
>>>>>>> 6b9ea343a4c45640ff8b9afc90f6691642605ba8
