import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

import styles from "./Page404.module.css"

export const Page404 = () =>{
    return(
        <>
        <Header />
            <Container>
                <h2 className={styles.titulo2}>Algo de errado nao está certo!</h2>
                <div className={styles.textos}>
                    <span className={styles.texto_grande}>404</span> <br />
                    <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
                </div>
            </Container>
        <Footer />
        </>
    )
}