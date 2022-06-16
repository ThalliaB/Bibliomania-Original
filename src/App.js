import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import TabelaCompleta from './components/pages/TabelaCompleta';
import Estante from './components/pages/Estante';
import CadastraEstante from './components/pages/CadastraEstante';
// import Tabela2022 from './components/pages/Tabela2022';


function App() {
  return (
    <Router>

    <Navbar />

      <Container customClass="min-height">
        <Routes>
          {/* aqui vao as referencias q dps serão chamadas para o roteamento das paginas */}
          <Route path="/" element={<Home/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/cadastraEstante" element={<CadastraEstante/>} />
          <Route path="/tabelacompleta" element={<TabelaCompleta/>} />
          <Route path="/estante" element={<Estante/>} />
          {/* <Route path="/tabela2022" element={<Tabela2022/>} /> */}
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
      </Container>

    <Footer />

    </Router>
  );
}

export default App;

// O Router envolve tudo
// Dps vem o Routes que envolve as referências para as páginas que dps serão chamadas
// E dentro dos Routes vão os Route que é o próprio link que leva à página