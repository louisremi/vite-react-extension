import React from 'react'
import { createRoot } from 'react-dom/client'

import '../styles'
import App from './Sidebar'

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
