import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";
import guitarras_header from "../assets/imagens/guitarras_header.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.imagem}
        src={guitarras_header}
        alt="Instrumentos musicais"
      />

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/apresentacao">Quem Somos</Link>
        <Link to="/produtos">Instrumentos</Link>
        <Link to="/endereco">Endereço</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
