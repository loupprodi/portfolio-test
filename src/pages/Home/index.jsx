import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

import styles from './Home.module.css'

import DevImg from '../../assets/developer-red.svg'

export const Home = () =>{
    return(
        <>
        <Header />
          <section className={styles.container}>
              <div className={styles.apresentacao}>
                  <p>
                    Olá, sou <br/>
                    <span>Luiz Prosdoskimi</span> <br/>
                    Dev Full Stack
                  </p>
                  <button className="btn btn-red">
                    Saiba mais sobre mim
                  </button>
              </div>
              <figure>
                <img className="img-home" src={DevImg} alt="Imagem de Home" />
              </figure>
          </section>
        <Footer />
      </>
    )
}