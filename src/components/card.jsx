
import { useState } from "react";
import styles from "./card.module.css";

export default function Cards() {
  const [activeMessage, setActiveMessage] = useState(null);

  const handleCardClick = (message) => {
    setActiveMessage(message);
    setTimeout(() => setActiveMessage(null), 3000);
    {activeMessage && (
      <div className={styles.modal}>
        <p>{activeMessage}</p>
        <button onClick={() => setActiveMessage(null)}>Fechar</button>
      </div>
    )}
  };

  const cardData = [
    {
      title: "Baterias Residenciais",
      description: "Energia solar eficiente para o seu lar.",
      message: "Serviço selecionado: Baterias Residenciais! Em breve entraremos em contato.",
    },
    {
      title: "Baterias Industriais",
      description: "Soluções robustas para o setor empresarial.",
      message: "Serviço selecionado: Baterias Industriais! Em breve entraremos em contato.",
    },
    {
      title: "Consultoria",
      description: "Especialistas prontos para energizar seu projeto.",
      message: "Serviço selecionado: Consultoria! Em breve entraremos em contato.",
    },
  ];

  return (
    <section className={styles.cardGrid}>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={() => handleCardClick()}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}


      {activeMessage && (
        <div className={styles.modal}>
          <p>{activeMessage}</p>
        </div>
      )}
    </section>
  );
}