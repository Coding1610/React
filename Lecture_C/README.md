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

<h3> Example <h3>
  
Babel Parse A to B

    const el = <> Hello Yash </>
    React.CreateElement("h1" , null , "Hello Yash");

    const el = < className = "bg" > Hello </>
    React.CreateElement("h1" , {className:"bg"} , "Hello");

    const el = <> Hello {name} </>
    React.CreateElement("h1" , null , "Hello" , name );
    
    const el = <Component/>
    React.CreateElement(Component , null);
    
    const el = <Component name="Yash"/>
    React.CreateElement(Component , {name:"Yash"}); <Component/>

# _2. JS Expressions_ 

1. We put any valid JS expression inside the curly braces in JSX. You can pass any JS expression as children, by enclosing it with {}.

# _3. Specifying Attributes with JSX_

1. You may use quotes to specify string literals as attributes.
2. <attributeName = "value"> Hello </>.
3. Since JSX is closer to JS than to HTML , React DOM uses camelCase Property naming Convention insted of HTML attribute names.

# _4. Children in JSX_

1. In JSX expression that contain both an opening tag and a closing tag, the content between those tags in passed as a special prop.
  <h3>Example</h3>
  
    prop : props.children.  
    <tag> Yashu </tag>.  
    Here children = "Yashu".
    
