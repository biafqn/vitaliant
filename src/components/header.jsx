import { useState, useEffect } from 'react';
import styles from "./header.module.css";
import logo from "../assets/logo.avif";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <picture>
          <source srcSet={logo} type="image/avif" />
          <img src={logo} alt="logo" className={styles.logo} />
        </picture>
        <div className={styles.titleContainer}>
          <h2>Vitaliant - Baterias Renováveis</h2>
          <p>Energia limpa e inovação para o futuro</p>
        </div>
      </div>


      <button 
        className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a></li>
          <li><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a></li>
          <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}