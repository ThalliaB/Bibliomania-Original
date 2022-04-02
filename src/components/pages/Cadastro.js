import { useNavigate } from 'react-router-dom'

import styles from './Cadastro.module.css'
import ProjectForm from '../project/ProjectForm'

function Cadastro() {

    const navigate = useNavigate();

    function createBook(livro) {
        fetch('http://localhost:5000/livros2021', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/tabelacompleta', { state: {message: 'Livro adicionado com sucesso!'} })
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastrar</h1>
            <ProjectForm handleSubmit={createBook} btnText="Cadastrar" />
        </div>
    )
}

export default Cadastro