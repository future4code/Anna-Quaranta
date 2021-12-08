import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import AdminHomePage from "../pages/AdminHomePage"
import HomePage from "../pages/HomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../page/TripDetailsPage"

export const Router = () => {

    const goTo = (path, history) => {
        history.push(path)
    }

    const goToBack = (history) => {
        history.goBack()
    }

    return (
        <BrowserRouter>
            <Header goTo={goTo} />
            <Switch>
                <Route exact path={"/"}>
                    <HomePage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/adminHomePage"}>
                    <AdminHomePage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/applicationFormPage"} >
                    <ApplicationFormPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path= {"/createTripPage"}>
                    <CreateTripPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/listTripsPage"}>
                    <ListTripsPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/loginPage"}>
                    <LoginPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/tripDetailsPage/:id"}>
                    <TripDetailsPage goTo={goTo} goToBack={goToBack} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}