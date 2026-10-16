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
      description: "Una opción clásica, ideal para disfrutar de un buen bocado."
    },

    {
      name: "Fajita de pollo",
      rdPrice: 550,
      price: 15,
      image: "images/j19.jpeg",
      icon: "🌮",
      description: "Tiras de pollo sazonadas, perfectas para una comida llena de sabor."
    },

    {
      name: "Fajita de res",
      rdPrice: 600,
      price: 15,
      image: "images/j18.jpg",
      icon: "🥩",
      description: "Una alternativa sabrosa para quienes prefieren el sabor de la carne de res."
    },

    {
      name: "Carne salada",
      rdPrice: 600,
      price: 15,
      image: "images/j3.jpeg",
      icon: "🥩",
      description: "Una preparación de sabor intenso, ideal para los amantes de la carne."
    },

    {
      name: "Mofongo de chicharrón",
      rdPrice: 1200,
      price: 20,
      image: "images/j5.jpeg",
      icon: "🍌",
      description: "Una combinación tradicional dominicana con textura y sabor irresistibles."
    },

    {
      name: "Mofongo de camarones",
      rdPrice: 1500,
      price: 25,
      image: "images/j9.jpg",
      icon: "🍤",
      description: "Una opción con sabor a mar para quienes disfrutan de los mariscos."
    },

    {
      name: "Alitas a la BBQ",
      rdPrice: 600,
      price: 15,
      image: "images/j4.jpeg",
      icon: "🍗",
      description: "Jugosas piezas cubiertas con una salsa de sabor ahumado y ligeramente dulce."
    },

    {
      name: "3 Golpe Mangu",
      rdPrice: 650,
      price: 20,
      image: "images/j15.jpg",
      icon: "🍳",
      description: "Un desayuno dominicano tradicional, perfecto para comenzar el día. Consultar disponibilidad."
    },

    {
      name: "1 libra de chicharrón",
      rdPrice: null,
      price: null,
      image: "images/j21.jpg",
      icon: "🥓",
      description: "Una opción crujiente para compartir o acompañar tu comida. Precio por libra; consultar."
    },

    {
      name: "Steak Sandwich",
      rdPrice: 600,
      price: 15,
      image: "images/j1.jpeg",
      icon: "🥪",
      description: "Una combinación práctica y sabrosa para disfrutar en cualquier momento."
    },

    {
      name: "Pechurina",
      rdPrice: 450,
      price: 15,
      image: "images/j2.jpeg",
      icon: "🍗",
      description: "Bocados de pollo ideales para disfrutar solos o acompañados."
    },

    {
      name: "Costillitas BBQ",
      rdPrice: 850,
      price: 15,
      image: "images/j11.jpg",
      icon: "",
      description: "Una opción jugosa con notas dulces y ahumadas en cada bocado."
    },

    {
      name: "Pescado Chillo",
      rdPrice: null,
      price: null,
      image: "images/j16.jpg",
      icon: "🐟",
      description: "Una alternativa del mar ideal para disfrutar de una buena comida. Precio por libra; consultar."
    },

    {
      name: "Pescado frito",
      rdPrice: null,
      price: null,
      image: "images/j6.jpg",
      icon: "🐟",
      description: "Una preparación tradicional para quienes disfrutan del sabor del pescado. Precio por libra; consultar."
    },

    {
      name: "Camarón",
      rdPrice: 1400,
      price: 27,
      image: "images/j14.jpg",
      icon: "🍤",
      description: "Elige entre una preparación al ajillo, cremosa o con sazón criolla."
    }

  ]
},

  /* ====================================================
     ESPECIALIDADES
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
        description: "Una propuesta especial para acompañar tus momentos de relax."
      },

      {
        name: "Clarimar",
        rdPrice: 300,
        price: 8,
        image: "images/ss2.jpg",
        icon: "🌊",
        description: "Una opción refrescante para disfrutar del ambiente caribeño."
      },

      {
        name: "Scuba Coral Reef",
        rdPrice: 350,
        price: 9,
        image: "images/ss3.jpg",
        icon: "🐚",
        description: "Una creación de la casa para quienes buscan algo diferente."
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

    note: "Con alcohol y sin alcohol disponibles.",

    items: [

      {
        name: "Con alcohol",
        rdPrice: 275,
        price: 7,
        image: "images/h1.jpg",
        icon: "🍓",
        description: "Una mezcla frutal con un toque especial para disfrutar con calma."
      },

      {
        name: "Sin alcohol",
        rdPrice: 250,
        price: 6,
        image: "images/h2.jpg",
        icon: "🥤",
        description: "Una alternativa refrescante para disfrutar en cualquier momento."
      },

      {
        name: "Fresa",
        price: null,
        image: "images/h3.jpg",
        icon: "🍓",
        description: "El dulzor de esta fruta crea una bebida suave y refrescante."
      },

      {
        name: "Chinola",
        price: null,
        image: "images/h4.jpeg",
        icon: "🥭",
        description: "Un toque tropical con el característico sabor entre dulce y ácido de la fruta."
      },

      {
        name: "Limón",
        price: null,
        image: "images/h5.jpg",
        icon: "🍋",
        description: "Una opción cítrica y refrescante, ideal para los días calurosos."
      },

      {
        name: "Mixto",
        price: null,
        image: "images/h6.jpg",
        icon: "🍹",
        description: "Una combinación de sabores frutales para quienes prefieren variedad."
      },

      {
        name: "Fruta fresca",
        price: null,
        image: "images/h7.jpeg",
        icon: "🍍",
        description: "Una opción frutal para disfrutar de una pausa refrescante."
      }

    ]
  },


  /* ====================================================
     CÓCTELES
  ==================================================== */

  {
    category: "cocktails",
    title: "Cócteles",
    icon: "🍸",

    items: [

      {
        name: "Mojito",
        rdPrice: 300,
        price: 8,
        image: "images/c1.jpg",
        icon: "🍸",
        description: "Personalízalo con tu sabor favorito: chinola, fresa, limón o blue."
      },

      {
        name: "Mojito Coco",
        rdPrice: 350,
        price: 9,
        image: "images/c2.jpg",
        icon: "🥥",
        description: "Una combinación refrescante con un toque tropical de coco."
      },

      {
        name: "Mojito Chinola",
        rdPrice: 350,
        price: 9,
        image: "images/c26.jpeg",
        icon: "🥥",
        description: "El equilibrio entre notas cítricas y el sabor tropical de la chinola."
      },

      {
        name: "Sex on the Beach",
        rdPrice: 300,
        price: 8,
        image: "images/c3.jpg",
        icon: "🍹",
        description: "Una mezcla frutal popular, ideal para disfrutar en un ambiente relajado."
      },

      {
        name: "Piña Colada",
        rdPrice: 300,
        price: 8,
        image: "images/h5.jpeg",
        icon: "🍍",
        description: "Una combinación cremosa que evoca el sabor de las vacaciones tropicales."
      },

      {
        name: "Gin Tonic",
        rdPrice: 400,
        price: 9,
        image: "images/c5.jpg",
        icon: "🍸",
        description: "Una mezcla clásica con notas botánicas y un acabado refrescante."
      },

      {
        name: "Margarita Devil",
        rdPrice: 400,
        price: 10,
        image: "images/c6.jpg",
        icon: "🌶️",
        description: "Una propuesta atrevida para quienes disfrutan de un toque picante."
      },

      {
        name: "Margarita",
        rdPrice: 350,
        price: 9,
        image: "images/c7.jpg",
        icon: "🍹",
        description: "Escoge entre
