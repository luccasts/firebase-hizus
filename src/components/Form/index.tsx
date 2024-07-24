import { useContext, useState } from "react"
import { AiFillEye, AiTwotoneEye } from "react-icons/ai"
import { FormContext } from "../../context/Form"
import useFormContext from "../../hooks/useFormContext"
import { Link } from "react-router-dom"


const Form = () => {
    const [hidden, setHidden] = useState('password')
    const { handleEmail, handlePassword, handleLogin, handleRegister } = useFormContext()
    const { password, email } = useContext(FormContext)
    function HandleHidden() {
        return hidden === "password" ? 'text' : 'password'
    }

    // const navigate = useNavigate();
    // function HandleUserLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     e.preventDefault();
    //     const user = users.users.filter((user) => user.email === email && user.password === password)
    //     const loginValidation = user.length !== 0;

    //     if (loginValidation) {
    //         localStorage.setItem('login', 'true')
    //         const id: string = user.map((u) => u.id).toString()
    //         localStorage.setItem('id', id)
    //         loginValidation ? navigate("/") : ""
    //     }
    // }

    // function HandleLogout(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     e.preventDefault();
    //     localStorage.removeItem('login')
    // }






    function handleUserLogin(e) {
        location.pathname === 'login' ? '' : '';
        e.preventDefault()
        handleLogin(email, password)

    }

    function handleUserRegister(e) {
        e.preventDefault()
        handleRegister(email,password)
 
    }

    return (
        <form action="" method="post">
            <label htmlFor='email'>
                E-mail
                <input value={email} onChange={(v) => handleEmail(v.target.value)} id='email' placeholder="Digite o e-mail" type="text" />

            </label>
            <label htmlFor='password'>
                Senha
                <input value={password} onChange={(v) => handlePassword(v.target.value)} id='password' placeholder='Digite o sua senha' type={hidden} />
                <button className='buttonHidden' type='button' onClick={() => setHidden(HandleHidden)}>
                    {hidden === 'password' ? <AiTwotoneEye /> : <AiFillEye />}

                </button>
            </label>

            {
                location.pathname === '/login'
                    ?
                    <button onClick={(e) => handleUserLogin(e)}> Logar-se</button>
                    :
                    <button onClick={(e) => handleUserRegister(e)} > Registar-se</button>
            }

            {
                location.pathname === '/login'
                    ?
                    <button>
                        <Link to='/cadastrar'>Cadastrar-se</Link>
                    </button>
                    :
                    <button>
                        <Link to='/login'> Fazer login</Link>
                    </button>

            }

        </form>
    )
}

export default Form;