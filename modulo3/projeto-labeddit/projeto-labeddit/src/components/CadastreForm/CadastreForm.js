import { Button, CircularProgress, TextField } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import useForm from "../../hooks/useForm"
import { goToLogin } from "../../routes/coordinator"
import signup from "../../services/signup"
import { Form, Buttons } from "../LoginForm/StyledLoginForm"
import { Inputs } from "./StyledCadastreForm"


const CadastreForm = () => {

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })


    //Chamar requisição de cadastro

    const onSubmitSignUp = (event) => {
        event.preventDefault()
        signup(form, history, cleanFields, setIsLoading)
    }


    return (
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
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    onChange={onChange}
                    value={form.password}
                    required

                />
            </Inputs>

            <Buttons>

                <Button type={"submit"} variant="contained" color="primary">
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Cadastrar</>}
                </Button>

                <Button onClick={() => goToLogin(history)}>
                    Login
                </Button>

            </Buttons>
        </Form>
    )
}

export default CadastreForm