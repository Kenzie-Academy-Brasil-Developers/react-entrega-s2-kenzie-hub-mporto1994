import axios from "axios"
import { useForm } from "react-hook-form"
import { Container } from "../../components/Container"
import { RegisterDivS } from "./styles"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("E-mail obrigatório"),
        passwordConfirm: yup.string().required("E-mail obrigatório"),
        course_module: yup.string().required("E-mail obrigatório")
    })
    const {register,handleSubmit} = useForm({
        resolver:yupResolver(schema)
    })

    const applyRegister = (data) =>{
        console.log(data)
        axios.post('https://kenziehub.herokuapp.com/users',{
            name:data.name,
            contact:"something",
            bio:"garbage",
            password:data.password,
            email:data.email,
            course_module:data.course_module
            }
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        )
    }


    



    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <RegisterDivS>
                <h2>Crie sua Conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
                <form onSubmit={handleSubmit(applyRegister)}>
                    <label>Nome
                        <input type="text" placeholder="Digite o Nome"    {...register("name")}/>
                    </label>
                    <label>Email
                        <input type="text" placeholder="Digite o Email"   {...register("email")}/>
                    </label>
                    <label>Senha
                        <input type="text" placeholder="Digite a senha"   {...register("password")}/>
                    </label>
                    <label>Confirmação de Senha
                        <input type="text" placeholder="Confirme a senha" {...register("passwordConfirm")}/>
                    </label>
                    <label >Selecione o Módulo
                        <select  >
                            <option value="Primeiro módulo (Introdução ao Frontend)" {...register("course_module")}>Primeiro Módulo</option>
                            <option value="Segundo módulo (Frontend Avançado)"       {...register("course_module")}>Segundo Módulo</option>
                            <option value="Terceiro módulo (Introdução ao Backend)"  {...register("course_module")}>Terceiro Módulo</option>
                            <option value="Quarto módulo (Backend Avançado)"         {...register("course_module")}>Quarto Módulo</option>
                            {/* <option value="">Quinto Módulo</option> */}
                            {/* <option value="">Sexto Módulo</option> */}
                        </select>
                    </label>
                    <button type="submit">Cadastrar</button>
                </form>
                
            </RegisterDivS>
        </Container>
    )
}
export default Register
