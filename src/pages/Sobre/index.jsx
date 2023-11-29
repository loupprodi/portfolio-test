import styles from './Sobre.module.css'

import avatarImg from './images/avatarLuiz.jpg'

export const Sobre = () =>{
    return(
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <figure>
                <img src={avatarImg} alt="Avatar Luiz" className={styles.avatarImg} />
                </figure>
                <div>
                    <h2>Sobre</h2>
                  <p>sou Luiz Prosdoskimi <br />
                     dev full stack</p>
                  <p>Trabalho com desenvolvimento Web desde 2019</p>
                  <p>Sou apaixonado por transformar ideias em realidae digital</p>
                  <p>Especializado em criação de aplicações dinâmicas e intuitivas, com foco na experiência do usuário</p>
                </div>
            </div>


            <div className={styles.techs}>
                <h3>Techs</h3>
                images
            </div>
        </section>
    )
}