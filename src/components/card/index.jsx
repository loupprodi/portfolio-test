import styles from './Card.module.css'
import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'

export const Card = () =>{
    return(
        <section className={styles.card}>
            <h3>Titulo Projeto</h3>
            <p>texto descritivo do projeto</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <button className={styles.card_button}>
                    <BsArrowRight />
                </button>
            </div>
        </section>
    )
}