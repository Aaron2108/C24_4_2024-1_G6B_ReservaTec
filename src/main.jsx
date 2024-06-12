import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './components/app/store.js'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <LocalizationProvider dateAdapter={AdapterDayjs}>

    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
     </LocalizationProvider>
  </React.StrictMode>,
)
