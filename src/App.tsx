import { BrowserRouter, Route, Routes } from "react-router"
import Registration from "./pages/Registration"
import RouteGuard from "./RouteGuard"
import Main from "./pages/Main"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RouteGuard isAuthenticated={true} redirectPath='register' />} >
                    <Route index element={<Main />} />
                </Route>
                <Route path="register" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
