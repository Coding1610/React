# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Theory

1. State

--> State is similar to props , but it private and fully controlled by the component. We can create state only in class Component. It is possible to update the state/Modify the State.
--> Two way to Create State


_With Constructor_

--> When the component class is created, the constructore is the first method called, so its the right place to add state.
--> The Class instance has already been created in memory, so you cann use "this" to set properties on it.
--> when we write a constructor, make sure to call the parent class constructor by "super(props)".
--> When you call super with props. React will make props avilabel across the component throgh "this.props".


_Without Constructor_

--> The State property is referred as State.
--> This is a Class Instance Property.
--> State property access only in Class Comp. in which it create.
--> Access : {this.state.keyName}
--> In State property u can make , string , number , bool , function , array , object and PROPS etc.. Like an Object Structure.

--> You can use any of them.