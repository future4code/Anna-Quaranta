import axios from "axios"
import { useHistory } from "react-router-dom"
import { BASE_URL } from '../../constants/urls'
import useForm from "../../hooks/useForm"
import { goToFeed } from "../../routes/coordinator"
const CadastrePage = () => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const signup = async (event) => {

        event.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/users/signup`, form)
            localStorage.setItem("token", response.data.token)
            alert(`Seja bem vindo ${form.username}!`)
            goToFeed(history)
        } catch (error) {
            alert(error.response.data)
            console.log(error.response.data)
        }

    }

    return (
        <div>
            <h1>CadastrePage</h1>

            <form onSubmit={signup}>
                <input placeholder="Nome de usuário:" name="username" onChange={onChange} value={form.username} required />
                <input type="email" placeholder="Email:" name="email" onChange={onChange} value={form.email}
                    required />
                <input type="password" placeholder="Senha:" name="password" onChange={onChange} value={form.password} required />
                <button>Cadastrar</button>
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

export default CadastrePage