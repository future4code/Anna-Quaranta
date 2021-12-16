import { useHistory } from "react-router-dom"
import { goToCadastre } from "../../routes/coordinator"
import { Buttons, Central, Container, Form, Inputs } from "./StyledLogin"
import loginImage from "../../assets/images/loginImage.svg"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import login from "../../services/login"


const LoginPage = () => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    // Chamar requisição de login
    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form, cleanFields, history)
    }

    console.log(form)

    return (
        <Container>
            <Central>
                <img src={loginImage} alt="imagem de uma pessoa em uma porta" />
                <h2>Login</h2>
                <Form onSubmit={onSubmitLogin}>
                    <Inputs>
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
                            Entrar
                        </Button>

                        <Button color="secondary" onClick={() => goToCadastre(history)}>Não possui conta? Cadastre-se</Button>
                    </Buttons>

                </Form>
            </Central>
        </Container>
    )
}

export default LoginPage