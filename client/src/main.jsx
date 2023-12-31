import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorProvider } from './utils/ErrorContext/ErrorContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <ErrorProvider>
          <App />
        </ErrorProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
