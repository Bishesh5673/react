import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1'
// import App from './App.jsx'
// import Comp from './assets/Comp.jsx'
// import Welcome from './assets/Welcome.jsx'
// import Product from './assets/Product.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
    {/* <Comp/> */}
    {/* <Product/> */}
    <App1/>
  </div>
  
)
