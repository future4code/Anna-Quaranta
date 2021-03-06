import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import AdminHomePage from "../pages/AdminHomePage"
import HomePage from "../pages/HomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import ListTripsPage from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage"


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

                <Route exact path={"/applicationForm"} >
                    <ApplicationFormPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path= {"/createTrip"}>
                    <CreateTripPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/listTrips"}>
                    <ListTripsPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage goTo={goTo} goToBack={goToBack} />
                </Route>

                <Route exact path={"/tripDetails/:id"}>
                    <TripDetailsPage goTo={goTo} goToBack={goToBack}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}