import { Link } from "react-router-dom";
import styles from "./css/Home.module.css";
import guitarra from "../assets/imagens/home-guitarra.png";

import Apresentacao from "./Apresentacao";
import Produtos from "./Produtos";
import Endereco from "./Endereco";
import Contato from "./Contato";

function Home() {
return (
<>

<main
className={styles.home}
style={{
backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${guitarra})`,
}}
> <div className={styles.conteudo}> <h1>
Bem-vindo à <span>Nossa Loja!</span> </h1>


      <p>
        Os melhores instrumentos musicais para quem ama música.
        Encontre qualidade, variedade e tudo para sua jornada musical!
      </p>

      <Link to="/produtos" className={styles.botao}>
        Conheça nossos produtos →
      </Link>
    </div>
  </main>

  <Apresentacao />
  <Produtos />
  <Endereco />
  <Contato />
</>


);
}

export default Home;
