import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "../views/IndexPage"
import FavoritePage from "../views/FavoritePage"
import Layout from "../layout/Layout"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favorite" element={<FavoritePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter