# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Theory

# _Assets with React_

1. Inside Public Folder
2. Inside src Folder

# Inside Public Folder

1. If you put a file into the public folder, it will not be processed by Webpack. Instead it will be copied into the build folder untouched.
2. To reference assets in the public folder, you need to use a special variable called PUBLIC_URL. 
3. Only files inside the public folder will be accessible by %PUBLIC_URL% prefix.
4. Normally we recommend importing stylesheets, images and fonts from JS.

<h3>Syntax</h3>
{

    <link rel="shortcut icon" href="%PPUBLIC_URL%/favicon.icon
    <img href="%PUBLIC_URL%/Images/pic.jpg" alt="Mypic"/>
}

5. None of the files in public folder get post-processed or minified.
6. Missing files will not be called at compilation time, and will cause 404 errors for your users.
7. Result filenames won't include content hashes so you'll need to add query arguments or rename them everytime they change.

# When use Public Folder

1. You need a file with a specific name the build output, such as manifest.webmanifest.
2. You have thousands of images and need to dynamically reference their paths.
3. You want to include a small script like pace.js outside of the bundle code.
4. Some library may be incompatible with Webpack and you have no other option but to include it as a <script> tags.

<h3>Syntax</h3>
{

    Public Folder -> index.html
    <img src="%PUBLIC_URL%/pic.jpg"/>
    <img src="%PUBLIC_URL%/Images/pic.jpg"/>
}
<h3>Syntax</h3>
{

    Public Folder -> app.js
    <img src={process.env.PUBLIC_URL + "/pic.jpg"}/>
    <img src={process.env.PUBLIC_URL + "/Images/pic.jpg"/>
}

# Inside src Folder

1. With Webpack, using static assets like images and fonts works similarly to CSS.
2. You can import a file right in a JS module. This tells Webpack to include that file in the bundle.
3. Unlike CSS imports, importing a file gives you a string value. 
4. This value is the final path you can reference in your code.
5. As the src attribute of an images or the href of a link to a PDF.

<h3>Example</h3>
{

    1. Scripts and stylesheets get minified and bundle together to avoid extra network requests.
    2. Missing files cause compilation error instead of 404 erros for your users.
    3. Result filenames include content hashes so you don't need to worry about browsers caching their old versions.
}

<h3>Syntax</h3>
{

    App.js
    import pic from './pic.jpg'
    <img src={pic} alt="Mypic"/>
}

6. This ensure that when the project i built, Webpack will correctly move the images into the build folder, and provide us with correct paths.
