# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Higher Order Component_

1. A Higher Order Component (HOC) is an advanced technique in React for resuing component logic.
2. HOCs are common in third-party React libraries.
3. A HOC is a function that takes a component and returns a new component.

<h3>Syntax</h3>
{

    const newComponentName = hocFuncctionName( oldComponentName , otherParameters){ return something };
}

<h3>Example</h3>
{

    const EnhancedComponent = higherOrderComponent(WrappedComponent);
    const MicrosoftJob = withLanguage(ReactJS);
    const Army = witArmy(Men){training};
    const Army = (Men) => {training};
}
