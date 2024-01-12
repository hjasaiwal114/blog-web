import Topbar from "./component/topbar/Topbar";
import Homepage from "./pages/homepages/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/regiter/Register";
import Setting from "./pages/setting/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Wrrite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const currentUser = true;
    return (
        <Router>
            <Topbar />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/posts">
                    <Homepage />
                </Route>
                <Route pth="/register">
                    {currentUser ? <Homepage /> : <Register />}
                </Route>
                <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
                <Route path="/post/:id">
                    <Single />
                </Route>
                <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
                <Route path="/settings">
                    {currentUser ? <Settings/> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
}
export default App;