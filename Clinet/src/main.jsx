import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ important!


import { UserProvider } from './authcontext/Usercontext.jsx';

createRoot(document.getElementById('root')).render(
  
      <UserProvider>
  <StrictMode>
   
      <App />

          <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>


  </StrictMode>
   </UserProvider>  ,
)
