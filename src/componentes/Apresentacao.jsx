import styles from "./css/Apresentacao.module.css";

import loja from "../assets/imagens/loja.jpg";

function Apresentacao() {
  return (
    <section id="home" className={styles.apresentacao}>

      <div className={styles.texto}>
        <h2>Nossa Loja - Instrumentos Musicais</h2>

        <p>
          Se você é um amante da música, está em busca de um novo
          instrumento musical e não abre mão da qualidade, chegou ao
          lugar certo!
        </p>

        <p>
          Aqui em nossa loja você encontra os melhores instrumentos
          musicais para começar ou continuar sua jornada na música.
        </p>
      </div>

      <div className={styles.imagemContainer}>
        <img
          src={loja}
          alt="Nossa loja de instrumentos musicais"
        />
      </div>

    </section>
  );
}

export default Apresentacao;