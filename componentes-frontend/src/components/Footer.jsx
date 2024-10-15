import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Tienda de Belleza. Todos los derechos reservados.</p>
        <ul style={styles.footerLinks}>
          <li>
            <a href="/terms" style={styles.link}>
              Términos y Condiciones
            </a>
          </li>
          <li>
            <a href="/privacy" style={styles.link}>
              Política de Privacidad
            </a>
          </li>
        </ul>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" style={styles.link}>
            Facebook
          </a>{" "}
          |
          <a href="https://instagram.com" style={styles.link}>
            {" "}
            Instagram
          </a>{" "}
          |
          <a href="https://twitter.com" style={styles.link}>
            {" "}
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

// Estilos en línea
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  footerLinks: {
    listStyleType: "none",
    padding: 0,
    margin: "10px 0",
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  },
  socialIcons: {
    marginTop: "10px",
  },
};

export default Footer;
