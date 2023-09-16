import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// routes
import { BrowserRouter } from 'react-router-dom'
// styles
import './App.css'
import './sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
