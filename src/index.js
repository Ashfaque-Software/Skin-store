import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartStateContext } from './Static-Pages/Context/CartContext';
import {Provider} from 'react-redux'
import {store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <BrowserRouter>
      <CartStateContext>
<Provider store={store}>
  <App />
</Provider>
     
      </CartStateContext>
   </BrowserRouter>
    

      
   
   
  // </React.StrictMode>
);