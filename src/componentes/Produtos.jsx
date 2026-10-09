import styles from "./css/Produtos.module.css";

import guitarrinha from "../assets/imagens/guitarrinha.jpg";

function Produtos() {
  return (
    <section
      id="instrumentos"
      className={styles.produtos}
    >

      <div className={styles.produto}>
        <img src={guitarrinha} alt="Violão Yamaha" />

        <h3>
          Violão Yamaha C70 II Clássico
        </h3>

        <p>R$ 989,50</p>
      </div>

      <div className={styles.produto}>
        <img src={guitarrinha} alt="Violão Yamaha" />

        <h3>
          Violão Yamaha C70 II Clássico
        </h3>

        <p>R$ 989,50</p>
      </div>

      <div className={styles.produto}>
        <img src={guitarrinha} alt="Violão Yamaha" />

        <h3>
          Violão Yamaha C70 II Clássico
        </h3>

        <p>R$ 989,50</p>
      </div>

      <div className={styles.produto}>
        <img src={guitarrinha} alt="Violão Yamaha" />

        <h3>
          Violão Yamaha C70 II Clássico
        </h3>

        <p>R$ 989,50</p>
      </div>

    </section>
  );
}

export default Produtos;
