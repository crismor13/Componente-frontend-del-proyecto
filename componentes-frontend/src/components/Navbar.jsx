import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.navLink}>
          Beauty Shop
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Inicio
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/inventory" style={styles.navLink}>
            Inventario
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/sales" style={styles.navLink}>
            Ventas
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/accounting" style={styles.navLink}>
            Contabilidad
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Estilos en línea para el Navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  logo: {
    color: "white",
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "1em",
  },
};

export default Navbar;
