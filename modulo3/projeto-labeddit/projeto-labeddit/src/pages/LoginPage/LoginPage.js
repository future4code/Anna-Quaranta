import axios from "axios"
import { useHistory } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import useForm from "../../hooks/useForm"
import { goToFeed, goToCadastre} from "../../routes/coordinator"

const LoginPage = (props) => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    //----- REQUISIÇÃO

    const login = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`${BASE_URL}/users/login`, form)
            localStorage.setItem("token", response.data.token)
            goToFeed(history)

        } catch (error){
            alert("Usuário não encontrado. Email ou senha inválido!")
            cleanFields()
        }
    }

    return (
        <div>
            <h1>LoginPage </h1>
            <form onSubmit={login}>
                <input type={"email"} name="email" placeholder="Email:" onChange={onChange} value={form.email} required/>
                <input name="password" placeholder="Senha:" onChange={onChange} value={form.password} required/>
                <button>Enviar</button>
                <button onClick={() => goToCadastre(history)}>Cadastrar</button>
            </form>

            <div>
                <button>FeedPage</button>
                <button>LoginPage</button>
                <button>CadastrePage</button>
                <button>PostPage</button>
            </div>
        </div>
    )
}

export default LoginPage