import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserProvider from './context/UserContext.tsx'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import {Provider} from 'react-redux'
import { Store } from './store/Store.tsx'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={Store}>
        <App />
        </Provider>
      </QueryClientProvider>
    </UserProvider>
  </StrictMode>,
)
