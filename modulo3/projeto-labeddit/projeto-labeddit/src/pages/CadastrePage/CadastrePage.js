import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import signup from "../../services/signup"
import {Central,Form, Buttons} from "../LoginPage/StyledLogin"
import {Container, Inputs} from "./StyledCadastre"
import { Button, TextField } from "@material-ui/core"
import cadastre from "../../assets/images/cadastre.svg"



const CadastrePage = () => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })




    //Chamar requisição de cadastro

    const onSubmitSignUp = (event) => {
        event.preventDefault()
        signup(form, history, cleanFields)
    }

    return (
        <Container>
            <Central>
                <img src={cadastre} alt="imagem de uma garota de pernas cruzadas em cima de um chat bagunçado"/>
                <h2>CadastrePage</h2>
                <Form onSubmit={onSubmitSignUp}>
                    <Inputs>
                        <TextField
                            label="Nome de usuário"
                            variant="outlined"
                            name="username"
                            onChange={onChange}
                            value={form.username}
                            required
                        />

                        <TextField
                            label="Email"
                            variant="outlined"
                            type={"email"}
                            name="email"
                            onChange={onChange}
                            value={form.email}
                            required
                        />


                        <TextField
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            onChange={onChange}
                            value={form.password}
                            required
                            variant="outlined"
                        />
                    </Inputs>

                    <Buttons>
                        <Button type={"submit"} variant="contained" color="primary">
                            Cadastrar
                        </Button>
                    </Buttons>
                </Form>

            </Central>
        </Container>
    )
}

export default CadastrePage