# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _1. Event Handling_

1. The action to which JS can respond are called Events.

<h3>Example</h3>
1. Clicking an elemnt.
<br>
2. Submitting a form.
<br>
3. Scrolling Page.
<br>
4. Hovering an Elemnt.
<br>

2. Handling events with React element is very similat to handling events on DOM elements. There are some syntactic differences.
3. React events are named using camelCase, rather than lowercase.
4. With JSX you pass a function as the evennt handler , rather than a string.

<h3>Syntax</h3>
<onClick = {functionName}> Click Me </> // Function Coomp.
<br>
<onClick = {this.functionName}> Click Me </> // Class Comp.

5. In class comp. , function create karne ke liye function keyword likhna nahi hai.
6. Normal you use Funtion Comp. but when u want to play with state then u need to use Class Comp.
7. Koi bhi elemnt ka Default Event ko Stop karne ke liye,

<h3>Syntax</h3>
1. In HTML : < href="#" onclick="function();return false">Click </>
<br>
2. In React :   function functionName(e){
                    e.preventDefault();
                };

8. Class Comp. me Normal function create karishu to aema "this" keyword no use nai kari sakiye , ae mate constructor ma this.handleClick = this.handleClick.bind(this);
9. And Arrow Function me aese hi use kar sakate haii.

# _2. Passing Argument to Event Handlers_

1. Arrow Function
<h3>Syntax</h3>
<onClick = {(event) => this.functionName(id1,id2,id3...,event)}> Click Me </>
<br>

3. Bind Method
<h3>Syntax</h3>
<onClick = {this.functionName.bind(this,id)}> Click Me </>
<br>

1. Here in both case id is our State , Props or Data.
2. Here in arrow function "event" is React Event with property.
3. And in Bind Method "event" pass automatic. 
4. In normal case if we pass para/arg using () then automatic at the time render method call ho jayega. So we can not pass like this.
