import styles from './Home.module.css'
import imagem from '../../img/leitura.png'
import LinkButtom from '../layout/LinkButtom'

function Home() {
    return (
        <section className={styles.home_container}>
            <img src={imagem} alt="Bibliomania"/>
            <LinkButtom to="/estante" text="Minha estante" />
            <LinkButtom to="/tabelacompleta" text="Ver livros lidos" />
            <LinkButtom to="/cadastro" text="Cadastrar livro lido" />
            <LinkButtom to="/cadastraEstante" text="Cadastrar livro novo na estante" />
        </section>    
    )
}

export default Home