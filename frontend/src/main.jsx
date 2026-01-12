import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/index.js'
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="light"
      />
    </PersistGate>
  </Provider>
)
