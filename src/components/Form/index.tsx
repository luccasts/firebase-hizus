import { useContext, useState } from "react"
import { LoginContext } from "../../context/Login"
import users from '../../mocks/users.json'
import { AiFillEye, AiTwotoneEye } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Form = () => {



    
    const [hidden, setHidden] = useState('password')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login, setLogin } = useContext(LoginContext)

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

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode , errorMessage)
        });
    function HandleUserLogin (e) {
        e.preventDefault()
    }
    return (
        <form action="" method="post">
            <label htmlFor='email'>
                E-mail
                <input value={email} onChange={(v) => setEmail(v.target.value)} id='email' placeholder="Digite o e-mail" type="text" />

            </label>
            <label htmlFor='password'>
                Senha
                <input value={password} onChange={(v) => setPassword(v.target.value)} id='password' placeholder='Digite o sua senha' type={hidden} />
                <button className='buttonHidden' type='button' onClick={() => setHidden(HandleHidden)}>
                    {hidden === 'password' ? <AiTwotoneEye /> : <AiFillEye />}

                </button>
            </label>
            <button onClick={(e) => HandleUserLogin(e)}>
                Logar-se
            </button>
            <button onClick={(e) => HandleLogout(e)}>
                Deslogar
            </button>
        </form>
    )
}

export default Form;