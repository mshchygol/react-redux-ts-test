import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import App from './App.tsx'
import Registration from './pages/Registration.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="register" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
