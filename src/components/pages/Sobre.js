import styles from './Sobre.module.css'
import imagem from '../../img/sobre.jpg'

function Sobre() {
    return (
        <div className={styles.container_total}>
            <div className={styles.div_img}>
                <img className={styles.img} src={imagem} alt="Foto de perfil" />
            </div>
            <div className={styles.div_txt}>
                <p> ✓ Olá, como você está? Eu espero que esteja ótimo!</p><br/>
                <p> ✓ Meu nome é Thallia Julliana Brum e tenho 17 anos. Eu moro no estado do Paraná, no Brasil!</p>
                <p> ✓ Sou uma pessoa que gosta muito de ler bons livros e estudar. Gosto também em códigos e levar uma vida leve.</p><br/>

                <p> ✓ Estou cursando inglês intermediário e aulas de informática e já terminei o ensino médio.</p>
                <p> ✓ Comecei a estudar programação em 2020 quando ganhei algumas aulas sobre isso. A partir deste momento comecei a gostar cada vez mais.</p>
                <p> ✓ Até o momento estudei algumas linguagens de programação, como Javascript, HTML, Java e React. Pretendo continuar estudando e trabalhar na área.</p>
            </div>
        </div>
    )
}

export default Sobre