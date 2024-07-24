import { useContext } from "react"

import { FormContext } from "../context/Form"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"

const useFormContext = () => {
    const { setEmail, setPassword, password, email } = useContext(FormContext)




    function handleEmail(v: string) {
        setEmail(v)

    }

    function handlePassword(v: string) {
        setPassword(v)

    }

    function handleLogin(email:string, password:string) {
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
                console.log(errorCode, errorMessage)
            });
     
    }

    function handleRegister (email: string, password: string) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
            console.log('formulário')
    }


    return {
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin,
    }
}

export default useFormContext;
