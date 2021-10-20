import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/profile'} component={Profile}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </div>
    );
}

export default App;
