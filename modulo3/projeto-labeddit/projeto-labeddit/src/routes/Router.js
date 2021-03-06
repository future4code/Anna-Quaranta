import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import CadastrePage from "../pages/CadastrePage/CadastrePage";
import CreatePostPage from "../pages/CreatePostPage/CreatePostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <FeedPage />
                </Route>

                <Route exact path="/criarPost">
                    <CreatePostPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/cadastrar">
                    <CadastrePage />
                </Route>
                <Route exact path="/post/:id">
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage exact={"/error"}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router