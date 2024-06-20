Theory

_HOOKS_ 

1. Hooks are functions that let you "hook into" React state and lifecycle features from Function Components.
2. Hooks allows you to use React without classes. In means you can use state and other React features without writing class.
3. React provides a few built-in Hooks like useState , useEffect , useRef , useMemo etc..


_Why Use Hooks_

1. If you write a function components and realize you need to add some state to it.


_Rules Of Hooks_

1. Only call Hooks at the top level - we should not call Hooks inside loops , conditions or nested functions.
2. Instead, always use Hooks at the top level of your React Functions.
3. Only call Hooks from React Functions - We should not call Hooks from regular JS Functions.
4. Instead, call Hooks from React function components or call Hooks from custom Hooks.
5. React relies on the order in which Hooks are called.
6. Hooks don't work inside Classes.
