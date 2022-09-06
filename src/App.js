import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useRoutes } from "./routes"
import { HelmetProvider } from 'react-helmet-async'
import packageJSON from "../package.json"

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
                backgroundImage: `url(${packageJSON.homepage}/images/background.webp)`
            }}>
                {routes}
            </div>
        </BrowserRouter>
    </HelmetProvider>
}

export default App
