import './App.css';
import {HashRouter} from 'react-router-dom'
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes()
    return (
        <HashRouter>
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
