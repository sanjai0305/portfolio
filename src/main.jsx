import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 🌟 THEME INITIALIZATION
// We run this BEFORE React renders to prevent the screen from flashing white on load.
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// If the user previously chose dark, OR if they are a new visitor with a dark-mode OS
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark"); // Ensure it's saved for future visits
} else {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}

// Render the application after the HTML root is properly styled
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);