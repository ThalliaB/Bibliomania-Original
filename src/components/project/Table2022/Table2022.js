import { useLocation } from 'react-router-dom'

import {useState, useEffect} from 'react'

import Message from '../../layout/Message'
import LinkButtom from '../../layout/LinkButtom'
import Container from '../../layout/Container'
import styles from '../TableConfig.module.css'

function Table2021({key}) {

    const [livros, setLivros] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/livros2022', {
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
                <h1>Minha Tabela de 2022</h1>
                <LinkButtom to="/cadastro" text="Cadastrar" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Páginas</th>
                            <th>Editora</th>
                            <th>Data de início de leitura</th>
                            <th>Data de finalização de leitura</th>
                        </tr>
                    </thead>

                    <tbody>
                        {livros.length > 0 && livros.map(livro => {
                            return (
                                <tr key={key}>
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.paginas}</td>
                                    <td>{livro.editora}</td>
                                    <td>{livro.dataDeInicio}</td>
                                    <td>{livro.dataDeFinalizacao}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Container>
        </div>
    ) 
}

export default Table2021