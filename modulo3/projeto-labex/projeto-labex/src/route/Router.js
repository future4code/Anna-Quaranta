import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AdminHomePage from "../pages/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import HomePage from "../pages/HomePage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage"

export const Router = () => {

    const goTo = (path, history) => {
        history.push(path)
    }

    const goBack = (history) => {
        history.goBack()
    }

    return (
        <BrowserRouter>
            <Header goTo={goTo} />
            <Switch>
                <Route exact path={"/"}>
                    <HomePage goTo={goTo} />
                </Route>

                <Route exact path={"/adminHomePage"}>
                    <AdminHomePage goTo={goTo} />
                </Route>

                <Route exact path={"/applicationFormPage"}>
                    <ApplicationFormPage goBack={goBack} />
                </Route>

                <Route exact path={"/createTripPage"}>
                    <CreateTripPage goTo={goTo} />
                </Route>

                <Route exact path={"/listTripsPage"}>
                    <ListTripsPage goTo={goTo} goBack={goBack}/>
                </Route>

                <Route exact path={"/loginPage"}>
                    <LoginPage goTo={goTo} />
                </Route>

                <Route exact path={"/tripDetailsPage"}>
                    <TripDetailsPage goTo={goTo} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}