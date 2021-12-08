import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { baseUrl } from "../constants/url"

const LoginPage = () => {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = (e) => {
        switch (e.target.name) {
            case "email":
                console.log(e.target.value)
                setEmail(e.target.value)
                break;
            case "password":
                console.log(e.target.value)
                setPassword(e.target.value)
                break
            default:
                alert("Campo não encontrado. Entre em contato conosco!")
                break;
        }
    }

    const login = async () => {
        const body = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${baseUrl}/login`, body)
            alert("Acesso permitido! Bem vinde!")
            localStorage.setItem("token", response.data.token)
            history.replace("/adminHomePage")

        } catch (error) {
            console.log(error.response)
            alert("O usuário não foi encontrado. Tente novamente")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" value={email} name="email" onChange={onChange} />
            <input type="password" placeholder="Senha" value={password} name="password" onChange={onChange} />
            <button>Voltar</button>
            <button onClick={login}>Entrar</button>
        </div>
    )
}

export default LoginPage;