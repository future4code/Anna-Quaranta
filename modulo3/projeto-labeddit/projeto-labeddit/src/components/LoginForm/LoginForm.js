import { Button, CircularProgress, TextField } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { goToCadastre } from "../../routes/coordinator"
import login from "../../services/login"
import { Buttons, Form, Inputs } from "./StyledLoginForm"

const LoginForm = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    // Chamar requisição de login
    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form, cleanFields, history, setIsLoading)
    }

    return (
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
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
                </Button>

                <Button color="secondary" onClick={() => goToCadastre(history)}>
                    Não possui conta? Cadastre-se
                </Button>
            </Buttons>

        </Form>
    )
}

export default LoginForm