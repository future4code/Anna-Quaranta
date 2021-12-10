import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { baseUrl } from "../constants/url";
import { Container, Container2, Form, Button } from "../styles/FormStyled"
import { useProtectPage } from "../hooks/useProtectPage";

const CreateTripPage = (props) => {
    const history = useHistory()
    const [nameTrip, setNameTrip] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState("")
    useProtectPage(history, "/login")



    const onChange = (e) => {
        switch (e.target.name) {
            case "nameTrip":
                console.log(e.target.value)
                setNameTrip(e.target.value)
                break;
            case "planet":
                console.log(e.target.value)
                setPlanet(e.target.value)
                break
            case "date":
                console.log(e.target.value)
                setDate(e.target.value)
                break
            case "description":
                console.log(e.target.value)
                setDescription(e.target.value)
                break
            case "durationInDays":
                console.log(e.target.value)
                setDurationInDays(e.target.value)
                break
            default:
                alert("Campo não encontrado. Entre em contato conosco!")
                break;
        }
    }

    const createTrip = async () => {
        const body = {
            name: nameTrip,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

        const token = localStorage.getItem("token")

        try {
            const response = await axios.post(`${baseUrl}/trips`, body, {
                headers: {
                    auth: token
                }
            })
            alert("Viagem criada com sucesso!")
            console.log(response.data)
            setNameTrip("")
            setPlanet("")
            setDate("")
            setDescription("")
            setDurationInDays("")

        } catch (error) {
            if (error.response.data.message === "One or more parameters are missing") {
                alert("Um ou mais campos obrigatórios não foram preenchidos. Por favor, preencha-os.")
            } else {
                alert("Aconteceu um erro. Sentimos muito!")
                console.log(error.response)
            }
        }
    }

    return (
        <Container>
            <Container2>
                <h2>Criar Viagem</h2>
                <Form>
                    <label>
                        <legend>Selecione o nome da viagem:</legend>
                        <input placeholder="Nome" name="nameTrip" value={nameTrip} onChange={onChange} required />
                    </label>

                    <label>
                        <legend>Selecione o planeta:</legend>
                        <select name="planet" value={planet} onChange={onChange} required>
                            <option selected>Escolha um Planeta</option>
                            <option value="Mercúrio">Mercúrio</option>
                            <option value="Vênus">Vênus</option>
                            <option value="Terra">Terra</option>
                            <option value="Marte">Marte</option>
                            <option value="Jupiter">Jupiter</option>
                            <option value="Saturno">Saturno</option>
                            <option value="Urano">Urano</option>
                            <option value="Netuno">Netuno</option>
                            <option value="Plutão">Plutão</option>
                        </select>
                    </label>

                    <label>
                        <legend>Digite a data da viagem:</legend>
                        <input type="date" min="2021-12-08" name="date" value={date} onChange={onChange} required />
                    </label>

                    <label>
                        <legend>Digite a descrição da viagem:</legend>
                        <textarea placeholder="Descrição da viagem:" name="description" value={description} onChange={onChange} required />
                    </label>

                    <label>
                        <legend>Digite a duração em dias:</legend>
                        <input type="number" placeholder="Duração em dias" name="durationInDays" value={durationInDays} onChange={onChange} required />
                    </label>
                </Form>
                <Button>
                    <button onClick={() => props.goToBack(history)}>Voltar</button>
                    <button onClick={createTrip}>Criar</button>
                </Button>
            </Container2>
        </Container >
    )
}

export default CreateTripPage;