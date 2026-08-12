import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ListProvider } from './context/list.jsx'

createRoot(document.getElementById('root')).render(
  <ListProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </ListProvider>
)
