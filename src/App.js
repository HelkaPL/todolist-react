import { HashRouter, Link, NavLink, Redirect, Route, Router, Switch } from "react-router-dom";
import Author from "./features/tasks/author/author";
import TaskApp from "./features/tasks/taskApp";

function App() {

    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/tasks">Lista zadań</NavLink>
                    </li>
                    <li>
                        <NavLink to="/author">O autorze</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/tasks">
                        <TaskApp />
                    </Route>
                    <Route path="/author">
                        <Author />
                    </Route>
                    <Route path="/">
                        <Redirect to="/tasks" />
                    </Route>
                </Switch>
            </nav>
        </HashRouter>
    );
}

export default App;