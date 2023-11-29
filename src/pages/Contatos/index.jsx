import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from '../../components/Container'
import {GoMail} from 'react-icons/go'
import {BsInstagram, BsYoutube, BsGithub, BsLinkedin} from 'react-icons/bs'



import styles from './Contatos.module.css'

export const Contatos = () =>{
    return(
        <>
            <section className={styles.contatosContainer}>
            <h2>Contatos</h2>
            <h3>Entre em  contato</h3>
            <p>Para que possamos conversar mais sobre. </p>
            <div className={styles.icones}>
                <a href='mailto:luizprosdoskimi@gmail.com' target='_blank' rel='noopener noreferrer'>
                <GoMail className={styles.icone} size={40}/>
                </a>
                <a href="">
                <BsInstagram className={styles.icone} size={40}/>
                </a>
                <a href="">
                <BsYoutube className={styles.icone} size={40}/>
                </a>
                <a href="">
                <BsGithub className={styles.icone} size={40}/>
                </a>
                <a href="">
                <BsLinkedin className={styles.icone} size={40}/>
                </a>
            </div>
            </section>
        </>
    )
}