import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterWraper from './Routes/projectRoutes'
import App from './App'
import { Provider } from 'react-redux'
import Store from './Store/Store/StoreItems'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
  <RouterWraper >
   <App />
   </RouterWraper>
  </Provider>
  </StrictMode>,
)
