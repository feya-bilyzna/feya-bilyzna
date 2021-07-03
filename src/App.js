import './App.css';
import {HashRouter} from 'react-router-dom'
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes()
    return (
            <HashRouter>
                <div>
                    {routes}
                </div>
            </HashRouter>
    );
}

export default App;
