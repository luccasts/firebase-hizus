import styles from './Login.module.css'
import Form from '../../components/Form';
import FormProvider from '../../context/Form';


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
                <FormProvider>
                    <Form />
                </FormProvider>
            </main>
            <footer>
                Footer
            </footer>
            </>
    )
}


export default Login;