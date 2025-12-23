import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Comp from './assets/Comp.jsx'
import Welcome from './assets/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
    <Comp/>
  </div>
  
)
