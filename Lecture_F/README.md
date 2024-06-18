# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

1. Event Handling

--> The action to which JS can respond are called Events.
--> 1. Clicking an elemnt
--> 2. Submitting a form
--> 3. Scrolling Page
--> 4. Hovering an Elemnt

--> Handling events with React element is very similat to handling events on DOM elements. There are some syntactic differences.

1. React events are named using camelCase, rather than lowercase.
2. With JSX you pass a function as the evennt handler , rather than a string.

<button onClick = {functionName}> Click Me </button> // Function Coomp

<button onClick = {this.functionName}> Click Me </button> // Class Comp

--> In class comp. , function create karne ke liye function keyword likhna nahi hai.

--> Normal you use Funtion Comp. but when u want to play with state then u need to use Class Comp.

-->> Koi bhi elemnt ka Default Event ko Stop karne ke liye,

1. In HTML : <a href="#" onclick="function();return false">Click </a>
2. In React :   function functionName(e){
                    e.preventDefault();
                }

--> Class Comp. me Normal function create karishu to aema "this" keyword no use nai kari sakiye , ae mate constructor ma this.handleClick = this.handleClick.bind(this);

--> And Arrow Function me aese hi use kar sakate haii.


2. Passing Argument to Event Handlers

--> Arrow Function
--> <button onClick = {(event) => this.functionName(id1,id2,id3...,event)}> Click Me </button>

--> Bind Method
--> <button onClick = {this.functionName.bind(this,id)}> Click Me </button>

--> Here in both case id is our State , Props or Data
--> Here in arrow function "event" is React Event with property.
--> And in Bind Method "event" pass automatic. 

--> In normal case if we pass para/arg using () then automatic at the time render method call ho jayega. So we can not pass like this