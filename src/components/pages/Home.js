import styles from './Home.module.css'
import imagem from '../../img/leitura.png'
import LinkButtom from '../layout/LinkButtom'

function Home() {
    return (
        <section className={styles.home_container}>
            <img src={imagem} alt="Bibliomania"/>
            <LinkButtom to="/cadastro" text="Cadastrar" />
            <LinkButtom to="/tabela2022" text="Ver tabela de 2022" />
            <LinkButtom to="/tabelacompleta" text="Ver tabela completa" />
        </section>    
    )
}

export default Home