import axios from "axios"
import { useHistory } from "react-router-dom"
import { baseUrl } from "../constants/axiosConfig"
import { Container, Container2, Form, Input } from "../styles/LoginPageStyled"
import useForm from "../hooks/useForm"

const LoginPage = (props) => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    console.log(form)



    //----REQUISIÇÕES ------

    const login = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`${baseUrl}/login`, form)
            alert("Acesso permitido! Bem vinde!")
            localStorage.setItem("token", response.data.token)
            history.replace("/adminHomePage")

        } catch (error) {
            alert("O usuário não foi encontrado. Tente novamente")
            cleanFields()
        }
    }

    return (
        <Container>
            <Container2>
                <h2>Login</h2>
                <Form onSubmit={login}>
                    <Input>
                        <label>
                            <legend>Digite seu email:</legend>
                            <input placeholder="Email" type="email" value={form.email} name="email" onChange={onChange} required />
                        </label>
                        <label>
                            <legend>Digite sua senha:</legend>
                            <input type="password" placeholder="Senha" value={form.password} name="password" onChange={onChange} pattern="^.{6,}" title="É preciso ter no mínimo 6 caracteres." required />
                        </label>
                    </Input>
                    <button>Logar</button>
                </Form>
                <button onClick={() => props.goToBack(history)}>Voltar</button>

            </Container2>
        </Container>
    )
}

export default LoginPage;