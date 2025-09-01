import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.tsx'
import Registration from './pages/Registration.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import RouteGuard from './RouteGuard.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<RouteGuard isAuthenticated={false} redirectPath='register' />} >
                        <Route index element={<App />} />
                    </Route>
                    <Route path="register" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
