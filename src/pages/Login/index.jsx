import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Container } from "../../components/Container"
import { LoginDivS } from "./styles"

const Login = () => {
    const history = useHistory()

    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <LoginDivS>
                <h2>Login</h2>
                <form action="">
                    <label htmlFor="">Email
                        <input type="text" />
                    </label>
                    <label htmlFor="">Senha
                        <input type="text" />
                    </label>
                    <button type="submit">Entrar</button>
                </form>
                <span>Ainda não possui uma conta?</span>
                <button onClick={()=>history.push("/Register")}>Cadastre-se</button>
            </LoginDivS>
        </Container>
    )
}
export default Login
