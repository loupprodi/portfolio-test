import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Container} from '../../components/Container';
import { Link } from 'react-router-dom';

import styles from './Home.module.css'

import DevImg from '../../assets/developer-red.svg'

export const Home = () =>{
    return(
        <>
         <section className={styles.homeContainer}>
              <div className={styles.apresentacao}>
                  <p>
                    Olá, sou <br/>
                    <span>Luiz Prosdoskimi</span> <br/>
                    Dev Full Stack
                  </p>
                  <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre mim
                  </Link>
              </div>
              <figure>
                <img className={styles.img_home} src={DevImg} alt="Imagem de Home" />
              </figure>
          </section>
      </>
    )
}