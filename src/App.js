import {useEffect} from 'react'
import {HashRouter, useLocation} from 'react-router-dom'
import {useRoutes} from "./routes"

const ScrollToTop = () => {
    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

const App = ({history}) => {
    const routes = useRoutes()
    return <HashRouter>
        <ScrollToTop/>
        <div style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            backgroundImage: "url(https://bn1301files.storage.live.com/y4mRqnCtTP558-ej4IuQhw7TIFdRUaNV7WRp8RT0z0YuqToYPRxZ3AWzFH3TXnZryXn1fi-Li8PRPYT5ogu8P6LzSsUR4jLZOaTKyNIeXQe1K8lr_JVIu8Ds42aF7kc70q2zONJUmcjci2AMaqLSvKWXhDAKVm15Zwe5L5NzEph5FYD6tX0R6ICZI1Tbjxj-bHt?width=660&height=660&cropmode=none)"
        }}>
            {routes}
        </div>
    </HashRouter>
}

export default App
