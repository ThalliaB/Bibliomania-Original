import {useState} from 'react'

import Input from '../form/Input'
// import Date from '../form/Date'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'
// import "react-datepicker/dist/react-datepicker.css";

function ProjectForm({handleSubmit, btnText, livroData}) {

    // const [startDate, setStartDate] = useState()
    // const [date, setDate] = useState()
    const [livro, setLivro] = useState(livroData || {})

    const submit = (e) => {
        e.preventDefault();
        // console.log(livro)
        handleSubmit(livro)
    }

    function handleChange(e) {
        setLivro({...livro, [e.target.name]: e.target.value})
    }

    return (
        <div className={styles.form}>
            <form onSubmit={submit}>
                
                <Input 
                    type="text" 
                    text="Título" 
                    name="titulo"
                    placeholder="Digite o título do livro"
                    handleOnChange={handleChange}
                    value={livro.titulo ? livro.titulo : ''}
                />

                <Input 
                    type="text" 
                    text="Autor" 
                    name="autor"
                    placeholder="Digite o nome do autor do livro"
                    handleOnChange={handleChange}
                    value={livro.autor ? livro.autor : ''}
                />

                <Input 
                    type="number" 
                    text="Páginas" 
                    name="paginas"
                    placeholder="Digite o número de páginas do livro"
                    handleOnChange={handleChange}
                    value={livro.paginas ? livro.paginas : ''}
                />
                <Input 
                    type="text" 
                    text="Editora" 
                    name="editora"
                    placeholder="Digite a editora do livro"
                    handleOnChange={handleChange}
                    value={livro.editora ? livro.editora : ''}
                />


                <Input 
                    type="date" 
                    text="Data de início" 
                    name="dataDeInicio"
                    placeholder="Digite a data de início de leitura do livro"
                    handleOnChange={handleChange}
                    value={livro.dataDeInicio ? livro.dataDeInicio : ''}
                />

                <Input 
                    type="date" 
                    text="Data de finalização" 
                    name="dataDeFinalizacao"
                    placeholder="Digite a data de finalização de leitura do livro"
                    handleOnChange={handleChange}
                    value={livro.dataDeFinalizacao ? livro.dataDeFinalizacao : ''}
                />
                <SubmitButton text={btnText} />
            </form>
        </div>
    )
}

export default ProjectForm