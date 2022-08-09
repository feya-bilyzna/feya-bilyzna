import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useRoutes } from "./routes"
import { HelmetProvider } from 'react-helmet-async'

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

const App = ({ history }) => {
    const routes = useRoutes()
    return <HelmetProvider>
        <BrowserRouter>
            <ScrollToTop />
            <div style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                backgroundImage: "url(https://bn1301files.storage.live.com/y4mBOA4puG8MAvFZYQVwj33BR8oBSHp37srGth1QGLxtNDZCNKGX4TWm5I22r7kxbYiNnK2ydDg4yzOhbgO-Qid062aRKQVQW71T6y-65rNo022FPBL7PgBmGVQgdky8rzLQmXmr__rIwu9ekqBQcvAeacIiEq9aOS3zeAU6XrzdcFmmKG6GmEstITiZLPHNfBG?width=660&height=660&cropmode=none)"
            }}>
                {routes}
            </div>
        </BrowserRouter>
    </HelmetProvider>
}

export default App
