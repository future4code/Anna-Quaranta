import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import {goToCadastre} from "../../routes/coordinator"
import login from "../../services/login"

const LoginPage = (props) => {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    // Chamar requisição de login
    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form,cleanFields,history)
    }

    

    return (
        <div>
            <h1>LoginPage </h1>
            <form onSubmit={onSubmitLogin}>
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