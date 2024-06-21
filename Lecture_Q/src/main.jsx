import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const names = ["Yash","Man","Jaimin"];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App nameArr={names}/>
  </React.StrictMode>,
)