import styles from './Card.module.css'
import { FaCss3Alt, FaHtml5, FaJs, FaReact} from 'react-icons/fa'
import { BsArrowRight} from 'react-icons/bs'



// eslint-disable-next-line react/prop-types
export const Card = ({name, description, html_url}) =>{
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <a href={html_url} target='blank' rel="noopenner norefferer" className={styles.card_button}>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}