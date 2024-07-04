# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Theory

# _Lifting State Up_

1. State ke data ka access hum us class me hi kar sakte hai jisme create hua hai because state has local scope.
2. When we want to access same state data in parent or child class then we pass data as "props".
3. This senario is called Lifting State Up.
