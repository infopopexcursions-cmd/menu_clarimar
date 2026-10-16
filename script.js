```javascript
/*
========================================================
 LARIMAR CHILL ZONE - MENÚ DIGITAL
========================================================

 Precios:
 - Comida: precios directamente en USD.
 - Bebidas/especialidades: precio original en RD$
   convertido automáticamente a USD.

========================================================
*/


/* ======================================================
   CONFIGURACIÓN
====================================================== */

const RD_PER_USD = 60;


/* ======================================================
   DATOS DEL MENÚ
====================================================== */

const menuData = [

/* ====================================================
   COMIDA
==================================================== */

{
  category: "food",
  title: "Comida",
  icon: "🍽️",

  items: [

    {
      name: "Hamburguesa",
      rdPrice: 400,
      price: 12,
      image: "images/j20.jpeg",
      icon: "🍔",
      description: "Hamburguesa estilo casa."
    },

    {
      name: "Fajita de pollo",
      rdPrice: 550,
      price: 15,
      image: "images/j19.jpeg",
      icon: "🌮",
      description: "Fajitas de pollo."
    },

    {
      name: "Fajita de res",
      rdPrice: 600,
      price: 15,
      image: "images/j18.jpg",
      icon: "🥩",
      description: "Fajitas de res."
    },

    {
      name: "Carne salada",
      rdPrice: 600,
      price: 15,
      image: "images/j3.jpeg",
      icon: "🥩",
      description: "Carne salada preparada al estilo de la casa."
    },

    {
      name: "Mofongo de chicharrón",
      rdPrice: 1200,
      price: 20,
      image: "images/j5.jpeg",
      icon: "🍌",
      description: "Mofongo tradicional con chicharrón."
    },

    {
      name: "Mofongo de camarones",
      rdPrice: 1500,
      price: 25,
      image: "images/j9.jpg",
      icon: "🍤",
      description: "Mofongo con camarones."
    },

    {
      name: "Alitas a la BBQ",
      rdPrice: 600,
      price: 15,
      image: "images/j4.jpeg",
      icon: "🍗",
      description: "Alitas preparadas al estilo de la casa."
    },

    {
      name: "3 Golpe Mangu",
      rdPrice: 650,
      price: 20,
      image: "images/j15.jpg",
      icon: "🍳",
      description: "Mangú con tres golpes. Consultar disponibilidad."
    },

    {
      name: "1 libra de chicharrón",
      rdPrice: null,
      price: null,
      image: "images/j21.jpg",
      icon: "🥓",
      description: "Precio por libra. Consultar."
    },

    {
      name: "Steak Sandwich
