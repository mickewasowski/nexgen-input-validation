import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {FormProvider} from './contexts/FormContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
)
