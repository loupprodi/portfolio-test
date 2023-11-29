import styles from './Header.module.css'

export const Header = () =>{
    return(
        <header className={styles.header}>
            <span>LuizProsdoskimi.dev</span>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contatos</a>
            </nav>
        </header>
    )
}