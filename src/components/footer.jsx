import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id ="contato">
      <p>© 2025 Vitaliant. Todos os direitos reservados.</p>
      <p><strong>Telefone: </strong>(81)99999-0000</p>
      <p>Fins Acadêmicos</p>
    </footer>
  );
}