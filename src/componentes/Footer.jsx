import styles from "./css/Footer.module.css";

import whats from "../assets/imagens/whats.png";
import insta from "../assets/imagens/insta.png";
import face from "../assets/imagens/face.png";

function Footer() {
  return (
    <footer className={styles.footer}>

      <h3>
        Nossa Loja - Instrumentos Musicais
      </h3>

      <p>
        Rua Tuto, 54 - Lapa
      </p>

      <p>
        São Paulo - Brasil
      </p>

      <div className={styles.icones}>

        <img src={whats} alt="whats" />

        <img src={insta} alt="insta" />

        <img src={face} alt="face" />

      </div>

    </footer>
  );
}

export default Footer;
