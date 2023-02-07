import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./common/Navigation";
import TasksApp from "./features/tasks/TasksApp";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/authorPage";

function App() {

    return (
        <HashRouter>
            <Navigation />
            <Switch>
            <Route path="/tasks/:id">
                <TaskPage />
            </Route>
            <Route path="/tasks">
                <TasksApp />
            </Route>
            <Route path="/author">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/tasks" />
            </Route>
        </Switch>
        </HashRouter>
    );
}

export default App;