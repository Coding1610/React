# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Style [CSS] with React_

# _1. Inline CSS_

1. style is most often used in React applications to add dynamically computed styles at render time.
2. The style attribute accepts a JS object with camelCased properties rather than a CSS string.
3. Thi is consistent with the DOM style JS property, is more efficient, and prevents XSS security holes.
4. CSS classes are generally better for performance than inline styles.
5. styles are not autoprefixed. Vendor prefixes other than ms should begin with a capital letter.
6. ex : WebkitTransition has an uppercase 'W'.

<h3>Syntax</h3>
{

    const btnStyle={
        color:'red',
        backgroundColor:'yellow'
    };
    
    <button style={btnStyle}> Click Me </button>
    btnStyle.color = 'orange'
    btnStyle.backgroundColor = 'Green'
}

# _2. External CSS_

1. Use className not class e.g className="text".
2. Pass a string as the className prop.
3. It is common for CSS classes to depend on the componenet props or state.
4. It production, all CSS files will be concatenated intp a single minified .css file in the build output.

<h3>Syntax</h3>
{

    App.css
    .txt{
      color:'red'
    };
}

<h3>Syntax</h3>
{

    App.jsx
    import './App.css'
    <h1 className="txt">Hello</h1>
}

# _3. CSS Module_

1. When you import two css file in one file and class name in both file are same then class name conflict ho jayega.
2. Solution : CSS Module
3. CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.
4. CSS files in which all class names and animation names are scoped locally by default.

<h3>Syntax</h3>
{

    fileName.module.css
    import styles from "./fileName.module.css";
    <h1 className={styles.classname}> Hello </h1>
}
