import { useEffect } from 'react'
import { HashRouter, useLocation } from 'react-router-dom'
import { useRoutes } from "./routes"

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])
    return null
}

const App = ({ history }) => {
    const routes = useRoutes()
    return (
        <HashRouter>
            <ScrollToTop />
            <div style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
            }}>
                {routes}
            </div>
        </HashRouter>
    );
}

export default App;
