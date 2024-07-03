# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _State_

1. State is similar to props , but it private and fully controlled by the component. We can create state only in class Component. It is possible to update the state/Modify the State.
2. Two way to Create State.

# _With Constructor_

1. When the component class is created, the constructore is the first method called, so its the right place to add state.
2. The Class instance has already been created in memory, so you can use "this" to set properties on it.
3. when we write a constructor, make sure to call the parent class constructor by "super(props)".
4. When you call super with props. React will make props avilabel across the component throgh "this.props".
 
# _Without Constructor_

1. The State property is referred as State.
2. This is a Class Instance Property.
3. State property access only in Class Comp. in which it create.
4. Access : {this.state.keyName}.
5. In State property u can make , string , number , bool , function , array , object and PROPS etc.. Like an Object Structure.

You can use any of them...
