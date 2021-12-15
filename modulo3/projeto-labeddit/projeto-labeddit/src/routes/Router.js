import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastrePage from "../pages/CadastrePage/CadastrePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/cadastrar">
                    <CadastrePage/>
                </Route>
                <Route exact path="/post/:id">
                    <PostPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router