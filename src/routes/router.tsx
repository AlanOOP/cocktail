import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "../views/IndexPage"
import Layout from "../layout/Layout"
import { lazy, Suspense } from "react"
const FavoritesPage = lazy(() => import('../views/FavoritePage'))

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favorite" element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter