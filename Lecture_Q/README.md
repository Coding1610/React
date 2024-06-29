# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Lists_

1. You can build collections of elements and include them in JSX using curly braces {}.

<h3>Example</h3>

const arr = [1,2,3,4,5];
state = {

    user : [{ id:12 , name:"Yash" , password:"ypfh7@#$16" },
            { id:42 , name:"Man" , password:"mpfh7@#$07" },
            { id:62 , name:"Jaimin" , password:"jufh7@#$2" }
            ],
    isLoggedIn : false
}


# _Iteration using map() Method_

1. The map() method creates a new array with the result of calling a provided function on every element in the calling array.
2. map calls a provided callback function once for each element in an array, in order and returns a new array from the result.

<h3>Syntax</h3>

map( callback( currValue , index , array ) , thisArg );

<h3>Example</h3>

map((num,index) => {return num});