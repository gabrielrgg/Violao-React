import styles from "./css/Contato.module.css";

import whats from "../assets/imagens/whats.png";
import insta from "../assets/imagens/insta.png";
import face from "../assets/imagens/face.png";

function Contato() {
  return (
    <section
      id="contato"
      className={styles.contato}
    >

      <form className={styles.form}>

        <label>
          Entre com o seu nome:
        </label>

        <input
          type="text"
          placeholder="Digite seu nome aqui"
        />

        <label>
          Entre com o seu e-mail:
        </label>

        <input
          type="email"
          placeholder="Digite seu email aqui"
        />

        <label>
          Faça seu pedido por aqui:
        </label>

        <textarea />

        <button type="submit">
          Enviar
        </button>

      </form>

      <div className={styles.redes}>

        <h3>
          Acesse também nossas redes sociais:
        </h3>

        <div className={styles.icones}>

          <img src={whats} alt="whats" />

          <img src={insta} alt="insta" />

          <img src={face} alt="face" />

        </div>

      </div>

    </section>
  );
}

export default Contato;
