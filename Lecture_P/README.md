# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Conditional Rendering_

1. Conditional Rendering in React works the same way conditions work in JS.
2. Use JS operator like if or the conditional(ternary) operator to create element representing the current state, and let React update the UI to match them.
3. if and else-if statements don't work inside JSX. This is Because JSX is just syntactic sugar for function , class and object construction.
4. render() return one element.

# _If Statement_

<h3>Syntax</h3>
if(condition){
    return something;
}

# _Inline If with Logical Op._

1. You may embed any expression in JSX by wrapping them in curly braces. 
2. This includes the JS LOGICAL && OP.

<h3>Example</h3>

1. true && true = true
2. true && false = false
3. false && true = false
4. false && false = false
5. false && Expression = false
6. true && Expression = Expression
7. true && Exp1 && Exp2 .. && Exp3 = Exp3 [Rightmost Return]

# _If Else Statement_

<h3>Syntax</h3>
if( condition true ){
    return;
}
else{
    return;
}

# _Inline If Else with Logical Op._

<h3>Syntax</h3>
Condition ? Expression_1 : Expression_2

1. Use can write in JSX.
2. Condition True then Return Expression_1 else Return Expression_2

# _IIFE's_

<h3>Syntax</h3>
return (
    <>
    <div>
        {
            ( () => {
                your code
            } )()
        }
    </div>
    </>
)

1. In React, We se curly braces to wrap an IIFE, put all the logic you want inside it ( if/else , switch , ternary op. etc..) and return  whatever you want to render.
