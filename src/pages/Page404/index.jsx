import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const Page404 = () =>{
    return(
        <>
        <Header />
            <Container>
                <h2>Algo de errado nao está certo!</h2>
                <div>
                    <span>404</span> <br />
                    <strong>Página Não Localizada!</strong>
                </div>
            </Container>
        <Footer />
        </>
    )
}