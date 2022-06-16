import { Link } from "react-router-dom"

import Container from "./Container"

import logo from '../../img/logo.svg'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Bibliomania"/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cadastro">Cadastrar livro lido</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/tabelacompleta">Ver livros lidos no ano</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/estante">Minha estante</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar