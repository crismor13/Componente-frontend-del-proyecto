import React from "react";

const InventoryList = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No hay productos en el inventario.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nombre</th>
              <th style={styles.th}>Cantidad</th>
              <th style={styles.th}>Precio</th>
              <th style={styles.th}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={styles.td}>{product.name}</td>
                <td style={styles.td}>{product.quantity}</td>
                <td style={styles.td}>${product.price}</td>
                <td style={styles.td}>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Estilos en línea
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default InventoryList;
