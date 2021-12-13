import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastrePage from "../pages/CadastrePage";
import FeedPage from "../pages/FeedPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";

const Router = () => {

    const goTo = (history, path) => {
        history.push(path)
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage goTo = {goTo}/>
                </Route>

                <Route exact path="/cadastre">
                    <CadastrePage goTo = {goTo}/>
                </Route>

                <Route exact path="/feed">
                    <FeedPage goTo = {goTo}/>
                </Route>

                <Route exact path="/post">
                    <PostPage goTo = {goTo}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router