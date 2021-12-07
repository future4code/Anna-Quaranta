import React, {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Card } from "../styles/ListTripsPageStyled"
import { useRequestDataGet } from "../services/useRequestDataGet"
import { baseUrl } from "../constants/url"

const ListTripsPage = (props) => {
    const trips = useRequestDataGet(`${baseUrl}/trips`)
    // console.log(trips.trips)

    const history = useHistory()

    // const listTrips = (trips.trips).map((trip) => {
    //     return (
    //         <Card>
    //             <p>{trip.name}</p>
    //             <p>{trip.description}</p>
    //             <p>{trip.planet}</p>
    //             <p>{trip.durationInDays}</p>
    //             <p>{trip.date}</p>
    //         </Card>
    //     )
    // })

    return (
        <div>
            <button onClick={() => props.goBack(history)}>Voltar</button>
            <button onClick={() => props.goTo("/applicationFormPage", history)}>Inscrever-se</button>
            <h1>ListTripsPage</h1>
            {/* {listTrips} */}
        </div>
    )
}

export default ListTripsPage;

// deu erro na hora de tirar o objeto do trips da const trip. Ele não roda.