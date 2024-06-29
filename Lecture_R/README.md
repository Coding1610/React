# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory 

# _Keys_

1. A "key" is a special string attribute you need to include when creating lists of elements.
2. Keys help React identify which items have changed, are added, or are removed.
3. Keys should be given to the elements inside the array to give the elements a stable identity.
4. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
5. Most often you would use IDs from your data as keys.
6. Keys used within arrays should be unique among their siblings. However they don't need to be globally unique. We can use the same keys when we produce two different arrays.
7. Keys serve as a hint to React but they don't get passed to your componenets.
8. If you need the same value in your components, pass it explicitly as a prop with a different name.

# _Note_

1. A good rule of thumb is elements inside the map() call need keys.
2. Key should be specified inside the array.
3. Key is not props.