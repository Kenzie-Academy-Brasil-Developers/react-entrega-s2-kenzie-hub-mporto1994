import { Container } from "../../components/Container"
import { RegisterDivS } from "./styles"

const Register = () => {

    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <RegisterDivS>
                <h2>Crie sua Conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
                <form action="">
                    <label htmlFor="">Nome
                        <input type="text" />
                    </label>
                    <label htmlFor="">Email
                        <input type="text" />
                    </label>
                    <label htmlFor="">Senha
                        <input type="text" />
                    </label>
                    <label htmlFor="">Confirmação de Senha
                        <input type="text" />
                    </label>
                    <label htmlFor="">Selecione o Módulo
                        <select >
                            <option value="">Primeiro Módulo</option>
                            <option value="">Segundo Módulo</option>
                            <option value="">Terceiro Módulo</option>
                            <option value="">Quarto Módulo</option>
                            <option value="">Quinto Módulo</option>
                            <option value="">Sexto Módulo</option>
                        </select>
                    </label>
                    <button type="submit">Cadastrar</button>
                </form>
                
            </RegisterDivS>
        </Container>
    )
}
export default Register
