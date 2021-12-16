import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import signup from "../../services/signup"

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
        signup(form, history)
    }

    return (
        <div>
            <h1>CadastrePage</h1>
            <form onSubmit={onSubmitSignUp}>
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