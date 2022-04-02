import styles from './ProjectTable.module.css'

// import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
// import { Link } from 'react-router-dom'

function ProjectTable({posicao, titulo, autor, paginas, editora, dataDeInicio, dataDeFinalizacao}) {
    return (

        <table>
            <tr>
                <th>Posicao</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Páginas</th>
                <th>Editora</th>
                <th>Data de início de leitura</th>
                <th>Data de finalização de leitura</th>
            </tr>
            
            <tr>
                <td>{posicao}</td>
                <td>{titulo}</td>
                <td>{autor}</td>
                <td>{paginas}</td>
                <td>{editora}</td>
                <td>{dataDeInicio}</td>
                <td>{dataDeFinalizacao}</td>
            </tr>
        </table>

        // <div className={styles.project_card}>
        //     <h4>{name}</h4>
        //     <p>
        //         <span>Orçamento:</span> R${budget}
        //     </p>
        //     <p className={styles.category_text}>
        //         <span className={`${styles[category.toLowerCase()]}`}></span> {category}
        //     </p>
        //     <div className={styles.project_card_actions}>
        //         <Link to='/'>
        //             <BsPencil /> Editar
        //         </Link>
        //         <button>
        //             <BsFillTrashFill /> Excluir
        //         </button>
        //     </div>
        // </div>
    )
}

export default ProjectTable