import axios from "axios";
import { useHistory } from "react-router";
import { baseUrl, token } from "../constants/axiosConfig";
import { Container, Container2, Form } from "../styles/FormStyled"
import { useProtectPage } from "../hooks/useProtectPage";
import useForm from "../hooks/useForm";

const CreateTripPage = (props) => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    useProtectPage(history, "/login")


    //----- REQUISIÇÕES 
    
    const createTrip = async (event) => {
        event.preventDefault()

        try{
            
            const response = await axios.post(`${baseUrl}/trips`, form, {
                headers : {
                    auth: token
                }
            })

            alert("Viagem criada com sucesso")
            cleanFields()

        }catch{
            alert("Sentimos muito! Aconteceu um erro.")
        }
    }

    return (
        <Container>
            <Container2>
                <h2>Criar Viagem</h2>
                <Form onSubmit={createTrip}>
                    <label>
                        <legend>Selecione o nome da viagem:</legend>
                        <input placeholder="Nome" name="name" value={form.name} onChange={onChange} required />
                    </label>

                    <label>
                        <legend>Selecione o planeta:</legend>
                        <select name="planet" value={form.planet} onChange={onChange} required>
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
                        <input type="date" name="date" value={form.date} onChange={onChange} required />
                    </label>

                    <label>
                        <legend>Digite a descrição da viagem:</legend>
                        <textarea placeholder="Descrição da viagem:" name="description" value={form.description} onChange={onChange} required />
                    </label>

                    <label>
                        <legend>Digite a duração em dias:</legend>
                        <input type="number" placeholder="Duração em dias" name="durationInDays" value={form.durationInDays} onChange={onChange} required />
                    </label>
                    <button>Enviar</button>
                </Form>
                <button onClick={() => props.goToBack(history)}>Voltar</button>
            </Container2>
        </Container >
    )
}

export default CreateTripPage;