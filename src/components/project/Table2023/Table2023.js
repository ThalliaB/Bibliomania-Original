// import {initializeApp} from 'firebase/app'
// import {getFirestore, getDocs, collection} from 'firebase/firestore'

// import {useState, useEffect} from 'react'

// import Message from '../../layout/Message'
// import LinkButtom from '../../layout/LinkButtom'
// import Container from '../../layout/Container'
// import styles from '../TableConfig.module.css'


// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyBIBC7BgLJbEGkQR7kXAHdJEUMG6JObagY",
//     authDomain: "teste2-d58e6.firebaseapp.com",
//     projectId: "teste2-d58e6"
//   }); 


// function Table2021({key}) {

//     const [users, setUsers] = useState([]);

//     const db = getFirestore(firebaseApp);
//     const userCollectionRef = collection(db, "users");

//     useEffect(() => {
//         const getUsers = async () => {
//             const data = await getDocs(userCollectionRef);
//             setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
//         };
//         getUsers();
//     },[]);

//     return (
//         <div className={styles.project_container}>
//             <div className={styles.title_container}>
//                 <h1>Minha Tabela de 2022</h1>
//                 <LinkButtom to="/cadastro" text="Cadastrar" />
//             </div>
//             {/* {message && <Message type="success" msg={message} />} */}
//             <Container customClass="start">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Posição</th>
//                             <th>Título</th>
//                             <th>Autor</th>
//                             <th>Páginas</th>
//                             <th>Editora</th>
//                             <th>Data de início de leitura</th>
//                             <th>Data de finalização de leitura</th>
//                         </tr>
//                     </thead>

//                     <tbody>

//                         {users.map(user => {
//                             return(
//                                 <tr key={user.id}>
//                                     <td>{user.titulo}</td>
//                                     <td>{user.autor}</td>
//                                     <td>{user.paginas}</td>
//                                     <td>{user.editora}</td>
//                                 </tr>
//                             )
//                         })}


//                         {/* {livros.length > 0 && livros.map(livro => { 
//                              return (
//                                 <tr key={key}>
//                                     <td>{livro.id}</td>
//                                     <td>{livro.titulo}</td>
//                                     <td>{livro.autor}</td>
//                                     <td>{livro.paginas}</td>
//                                     <td>{livro.editora}</td>
//                                     <td>{livro.dataDeInicio}</td>
//                                     <td>{livro.dataDeFinalizacao}</td>
//                                 </tr>
//                             ) */}
                        
//                         {/* duas chaves e o parentesis })}*/ }
//                     </tbody>
//                 </table>
//             </Container>
//         </div>
//     ) 
// }

// export default Table2021