import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Card } from '../../components/card'
import styles from './Projetos.module.css'

export const Projetos = () =>{
    return(
        <section className={styles.projetos}>
        <h1>Projetos</h1>
            <section>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </section>
        </section>
    )
}