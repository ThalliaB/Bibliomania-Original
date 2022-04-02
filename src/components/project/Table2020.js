import {useState, useEffect} from 'react'

import Container from '../layout/Container'
import styles from './Table2020.module.css'

function Table2020() {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/livros2020', {
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
                <h1>Minha Tabela de 2020</h1>
            </div>
            <Container customClass="start">
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

export default Table2020