import styles from './Login.module.css'
import Form from '../../components/Form';
import LoginProvider from '../../context/Login';

const Login = () => {
    return (
        <>
            <header>
                Nav
            </header>
            <main className={styles.main}>
                <section>
                    Hizus
                </section>
                <LoginProvider>
                    <Form />
                </LoginProvider>
            </main>
            <footer>
                Footer
            </footer>
            </>
    )
}


export default Login;