import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const arr = [99,98,97,96,95,94,93,92,91];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App number={arr}/>
  </React.StrictMode>,
)
