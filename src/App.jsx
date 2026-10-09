import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Apresentacao from "./componentes/Apresentacao";
import Produtos from "./componentes/Produtos";
import Endereco from "./componentes/Endereco";
import Contato from "./componentes/Contato";
import Footer from "./componentes/Footer";

function App() {
return ( <Router> <Header />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apresentacao" element={<Apresentacao />} />
    <Route path="/produtos" element={<Produtos />} />
    <Route path="/endereco" element={<Endereco />} />
    <Route path="/contato" element={<Contato />} />
  </Routes>

  <Footer />
</Router>

);
}

export default App;
