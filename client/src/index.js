// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
