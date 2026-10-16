```javascript
/*
========================================================
 LARIMAR CHILL ZONE - MENÚ DIGITAL
========================================================

 Precios:
 - Todos los precios visibles se muestran en USD.
 - Los productos sin precio muestran "Consultar".
 - Se conservan las imágenes, categorías y funcionalidades.

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
        description: "Un clásico para disfrutar de una comida sabrosa y contundente."
      },

      {
        name: "Fajita de pollo",
        rdPrice: 550,
        price: 15,
        image: "images/j19.jpeg",
        icon: "🌮",
        description: "Una opción sabrosa, ideal para disfrutar en cada bocado."
      },

      {
        name: "Fajita de res",
        rdPrice: 600,
        price: 15,
        image: "images/j18.jpg",
        icon: "🥩",
        description: "Una alternativa sustanciosa para quienes prefieren el sabor de la carne de res."
      },

      {
        name: "Carne salada",
        rdPrice: 600,
        price: 15,
        image: "images/j3.jpeg",
        icon: "🥩",
        description: "Una opción de sabor tradicional para los amantes de la buena carne."
      },

      {
        name: "Mofongo de chicharrón",
        rdPrice: 1200,
        price: 20,
        image: "images/j5.jpeg",
        icon: "🍌",
        description: "Plátano majado acompañado del sabor crujiente y sabroso del chicharrón."
      },

      {
        name: "Mofongo de camarones",
        rdPrice: 1500,
        price: 25,
        image: "images/j9.jpg",
        icon: "🍤",
        description: "Una combinación de plátano majado y sabor marino para disfrutar algo diferente."
      },

      {
        name: "Alitas a la BBQ",
        rdPrice: 600,
        price: 15,
        image: "images/j4.jpeg",
        icon: "🍗",
        description: "Alitas bañadas en salsa barbacoa, con un toque dulce y ahumado."
      },

      {
        name: "3 Golpe Mangu",
        rdPrice: 650,
        price: 20,
        image: "images/j15.jpg",
        icon: "🍳",
        description: "Un desayuno dominicano tradicional, perfecto para comenzar el día con energía."
      },

      {
        name: "1 libra de chicharrón",
        rdPrice: null,
        price: null,
        image: "images/j21.jpg",
        icon: "🥓",
        description: "Una porción ideal para compartir o disfrutar como picadera. Precio por libra; consultar."
      },

      {
        name: "Steak Sandwich",
        rdPrice: 600,
        price: 15,
        image: "images/j1.jpeg",
        icon: "🥪",
        description: "Una propuesta para quienes disfrutan los sándwiches con sabor a carne."
      },

      {
        name: "Pechurina",
        rdPrice: 450,
        price: 15,
        image: "images/j2.jpeg",
        icon: "🍗",
        description: "Pollo empanizado, ideal para una comida rápida y sabrosa."
      },

      {
        name: "Costillitas BBQ",
        rdPrice: 850,
        price: 15,
        image: "images/j11.jpg",
        icon: "🍖",
        description: "Una opción con salsa barbacoa para disfrutar de un sabor intenso."
      },

      {
        name: "Pescado Chillo",
        rdPrice: null,
        price: null,
        image: "images/j16.jpg",
        icon: "🐟",
        description: "Una alternativa del mar para disfrutar de una buena comida. Precio por libra; consultar."
      },

      {
        name: "Pescado frito",
        rdPrice: null,
        price: null,
        image: "images/j6.jpg",
        icon: "🐟",
        description: "Una preparación tradicional para los amantes del pescado. Precio por libra; consultar."
      },

      {
        name: "Camarón",
        rdPrice: 1400,
        price: 27,
        image: "images/j14.jpg",
        icon: "🍤",
        description: "Elige tu preparación favorita: al ajillo, a la crema o al estilo criollo."
      }

    ]
  },


  /* ====================================================
     ESPECIALIDADES DE LA CASA
  ==================================================== */

  {
    category: "specials",
    title: "Especialidades de la casa",
    icon: "⭐",

    items: [

      {
        name: "On the Wheels",
        rdPrice: 300,
        price: 8,
        image: "images/ss1.jpg",
        icon: "🍹",
        description: "Una creación de la casa para acompañar tus momentos de relajación y diversión."
      },

      {
        name: "Clarimar",
        rdPrice: 300,
        price: 8,
        image: "images/ss2.jpg",
        icon: "🌊",
        description: "Una propuesta exclusiva para disfrutar de una experiencia diferente en Larimar Chill Zone."
      },

      {
        name: "Scuba Coral Reef",
        rdPrice: 350,
        price: 9,
        image: "images/ss3.jpg",
        icon: "🐚",
        description: "Una especialidad de la casa con personalidad propia, ideal para descubrir algo nuevo."
      }

    ]
  },


  /* ====================================================
     SMOOTHIES
  ==================================================== */

  {
    category: "smoothies",
    title: "Smoothies",
    icon: "🥤",

    note: "Opciones con alcohol y sin alcohol disponibles.",

    items: [

      {
        name: "Con alcohol",
        rdPrice: 275,
        price: 7,
        image: "images/h1.jpg",
        icon: "🍓",
        description: "Una alternativa frutal con un toque de alcohol para disfrutar de un momento diferente."
      },

      {
        name: "Sin alcohol",
        rdPrice: 250,
        price: 6,
        image: "images/h2.jpg",
        icon: "🥤",
        description: "Una bebida refrescante para disfrutar del sabor de la fruta sin alcohol."
      },

      {
        name: "Fresa",
        price: null,
        image: "images/h3.jpg",
        icon: "🍓",
        description: "Dulce, frutal y refrescante, ideal para cualquier momento del día."
      },

      {
        name: "Chinola",
        price: null,
        image: "images/h4.jpeg",
        icon: "🥭",
        description: "Un sabor
