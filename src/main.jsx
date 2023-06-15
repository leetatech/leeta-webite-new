import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './output.css';
import { IntlProvider } from 'react-intl'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language}>
      <App />
    </IntlProvider>
  
  </React.StrictMode>,
)
