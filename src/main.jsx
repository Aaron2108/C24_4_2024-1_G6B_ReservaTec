import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './components/app/store.js'
import { LocalizationProvider } from '@mui/x-date-pickers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LocalizationProvider>

    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
     </LocalizationProvider>
  </React.StrictMode>,
)
