import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "pannellum";
import App from './App'
import './index.css'

// --- FORCE DARK THEME START ---
// Set the DaisyUI theme attribute
document.documentElement.setAttribute('data-theme', 'dark');
// Set the Tailwind Dark Mode class
document.documentElement.classList.add('dark');
// Set a solid background color to prevent "white flashes" on load
document.documentElement.style.backgroundColor = '#050505'; 
// --- FORCE DARK THEME END ---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)