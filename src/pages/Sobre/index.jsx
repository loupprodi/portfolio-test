import styles from './Sobre.module.css'
import avatarImg from './images/avatarLuiz.jpg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'


export const Sobre = () =>{
    return(
        <section className={styles.sobre}>

            <div className={styles.bio}>
                
                <img src={avatarImg} alt="Avatar Luiz" className={styles.avatarImg} />
                
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                  <p>sou <span>Luiz Prosdoskimi</span><br />
                    <strong>dev full stack</strong></p>
                  <p>Trabalho com desenvolvimento Web desde 2019</p>
                  <p>Sou apaixonado por transformar ideias em realidae digital</p>
                  <p>Especializado em criação de aplicações dinâmicas e intuitivas, com foco na experiência do usuário</p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                <img src={html} alt="Icone do HTML" />
                <img src={css} alt="Icone do CSS" />
                <img src={js} alt="Icone do JS" />
                <img src={react} alt="Icone do React" />
                <img src={node} alt="Icone do Node" />
                <img src={sql} alt="Icone do Sql" />
                </div>
            </div>
        </section>
    )
}