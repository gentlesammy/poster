import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from "./Blogger.jsx"
import Bank from './Bank.jsx'
import Inventory from './Inventory.jsx'
//import providers 
import {AppNameProvider} from "./context/AppNameContext"
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from "./Meal"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppNameProvider>
    <ProductProvider>
      {/* <Meal /> */}
      <Inventory />
    </ProductProvider>
    {/* <Bank /> */}
    {/* <App /> */}
    {/* <Blogger /> */}
    
  </AppNameProvider>
  </StrictMode>,
  // <div>
  //       <h1 className='text-success bg-primary'>Hello World</h1>
  //       <p> Greetings from Mars </p>
  // </div>
 
)
