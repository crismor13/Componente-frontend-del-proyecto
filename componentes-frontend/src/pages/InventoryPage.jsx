import React from "react";
import InventoryList from "../components/InventoryList";

const InventoryPage = () => {
  // Datos de ejemplo para el inventario
  const products = [
    { id: 1, name: "Shampoo", quantity: 10, price: 25.5, description: "Shampoo hidratante para todo tipo de cabello." },
    { id: 2, name: "Cremas faciales", quantity: 5, price: 40.0, description: "Crema facial antiedad." },
    { id: 3, name: "Esmalte de uñas", quantity: 20, price: 10.99, description: "Esmalte de uñas en varios colores." },
    { id: 4, name: "Secadora de cabello", quantity: 2, price: 150.0, description: "Secadora profesional de cabello." },
    { id: 5, name: "Maquillaje", quantity: 15, price: 35.99, description: "Base de maquillaje en tonos variados." },
    {
      id: 6,
      name: "Plancha para el cabello",
      quantity: 8,
      price: 120.5,
      description: "Plancha de cabello de cerámica para un alisado perfecto.",
    },
    {
      id: 7,
      name: "Crema para manos",
      quantity: 25,
      price: 15.0,
      description: "Crema hidratante para manos secas y agrietadas.",
    },
    { id: 8, name: "Loción corporal", quantity: 12, price: 30.0, description: "Loción corporal con aroma a flores." },
    {
      id: 9,
      name: "Peine de madera",
      quantity: 50,
      price: 8.99,
      description: "Peine de madera para evitar el frizz y cuidar el cabello.",
    },
    {
      id: 10,
      name: "Tónico capilar",
      quantity: 18,
      price: 45.0,
      description: "Tónico capilar para fortalecer las raíces y estimular el crecimiento.",
    },
    {
      id: 11,
      name: "Aceite de argán",
      quantity: 7,
      price: 60.0,
      description: "Aceite de argán 100% puro para hidratar y suavizar el cabello.",
    },
    {
      id: 12,
      name: "Mascarilla facial",
      quantity: 30,
      price: 20.5,
      description: "Mascarilla facial de arcilla para limpiar y purificar la piel.",
    },
    {
      id: 13,
      name: "Sérum facial",
      quantity: 10,
      price: 85.0,
      description: "Sérum con vitamina C para una piel luminosa y rejuvenecida.",
    },
    {
      id: 14,
      name: "Protector solar",
      quantity: 40,
      price: 25.0,
      description: "Protector solar SPF 50 para todo tipo de piel.",
    },
    {
      id: 15,
      name: "Brochas de maquillaje",
      quantity: 60,
      price: 12.0,
      description: "Juego de brochas de maquillaje de alta calidad.",
    },
  ];

  return (
    <div>
      <h1>Inventario</h1>
      <InventoryList products={products} /> {/* Pasamos la lista de productos como props */}
    </div>
  );
};

export default InventoryPage;
