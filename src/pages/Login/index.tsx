import styles from './Login.module.css'
import Form from '../../components/Form';
import FormProvider from '../../context/Form';
import { Link } from 'react-router-dom';


const Login = () => {
    
    return (
        <>
            <header>
                Nav
            </header>
            <main className={styles.main}>
                <section>
                    <Link to="/">Hizus</Link> 
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