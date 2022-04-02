import { useLocation } from 'react-router-dom'

import {useState, useEffect} from 'react'

// import Message from '../layout/Message'
// import LinkButtom from '../layout/LinkButtom'
import Container from '../layout/Container'
import styles from './Table2019.module.css'

function Table() {

    const [livros, setLivros] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/livros2019', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json()) 
        .then(data => {
            setLivros(data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Minha Tabela de 2019</h1>
                {/* <LinkButtom to="/cadastro" text="Cadastrar" /> */}
            </div>
            {/* {message && <Message type="success" msg={message} />} */}
            <Container customClass="center">
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Páginas</th>
                            <th>Editora</th>
                        </tr>
                    </thead>

                    <tbody>
                        {livros.length > 0 && livros.map(livro => {
                            return (
                                <tr>
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.paginas}</td>
                                    <td>{livro.editora}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            
            </Container>
        </div>
    ) 
}

export default Table