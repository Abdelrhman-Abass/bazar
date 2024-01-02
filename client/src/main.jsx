import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store ,persistor  } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {app} from './firbase.config.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider app={app} store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
