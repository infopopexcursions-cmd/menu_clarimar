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
      description: "Jugosa carne acompañada de ingredientes frescos y una combinación de sabores irresistible."
    },

    {
      name: "Fajita de pollo",
      rdPrice: 550,
      price: 15,
      image: "images/j19.jpeg",
      icon: "🌮",
      description: "Tiernas tiras de pollo sazonadas, ideales para disfrutar de un toque lleno de sabor."
    },

    {
      name: "Fajita de res",
      rdPrice: 600,
      price: 15,
      image: "images/j18.jpg",
      icon: "🥩",
      description: "Suaves tiras de res sazonadas y preparadas para ofrecer una experiencia sabrosa."
    },

    {
      name: "Carne salada",
      rdPrice: 600,
      price: 15,
      image: "images/j3.jpeg",
      icon: "🥩",
      description: "Carne sazonada con el toque tradicional que aporta carácter y sabor a cada bocado."
    },

    {
      name: "Mofongo de chicharrón",
      rdPrice: 1200,
      price: 20,
      image: "images/j5.jpeg",
      icon: "🍌",
      description: "Plátano majado con textura consistente y el sabor crujiente del chicharrón."
    },

    {
      name: "Mofongo de camarones",
      rdPrice: 1500,
      price: 25,
      image: "images/j9.jpg",
      icon: "🍤",
      description: "Una combinación de plátano majado y sabores del mar, perfecta para disfrutar algo especial."
    },

    {
      name: "Alitas a la BBQ",
      rdPrice: 600,
      price: 15,
      image: "images/j4.jpeg",
      icon: "🍗",
      description: "Alitas cubiertas con salsa barbacoa, con un equilibrio delicioso entre dulzura y sabor."
    },

    {
      name: "3 Golpe Mangu",
      rdPrice: 650,
      price: 20,
      image: "images/j15.jpg",
      icon: "🍳",
      description: "Un clásico desayuno dominicano con mangú y sus tres acompañamientos tradicionales. Consultar disponibilidad."
    },

    {
      name: "1 libra de chicharrón",
      rdPrice: null,
      price: null,
      image: "images/j21.jpg",
      icon: "🥓",
      description: "Corte de cerdo preparado para disfrutar de una textura crujiente y un sabor tradicional. Precio por libra."
    },

    {
      name: "Steak Sandwich",
      rdPrice: 600,
      price: 15,
      image: "images/j1.jpeg",
      icon: "🥪",
      description: "Pan relleno de carne de res, ideal para una comida práctica y llena de sabor."
    },

    {
      name: "Pechurina",
      rdPrice: 450,
      price: 15,
      image: "images/j2.jpeg",
      icon: "🍗",
      description: "Pollo empanizado con una cubierta dorada y crujiente, ideal para cualquier momento."
    },

    {
      name: "Costillitas BBQ",
      rdPrice: 850,
      price: 15,
      image: "images/j11.jpg",
      icon: "",
      description: "Costillas bañadas en salsa barbacoa, con una combinación de sabores intensos y apetitosos."
    },

    {
      name: "Pescado Chillo",
      rdPrice: null,
      price: null,
      image: "images/j16.jpg",
      icon: "🐟",
      description: "Una opción del mar ideal para disfrutar de un buen plato de pescado. Precio según peso."
    },

    {
      name: "Pescado frito",
      rdPrice: null,
      price: null,
      image: "images/j6.jpg",
      icon: "🐟",
      description: "Preparación tradicional con una cubierta dorada y una textura crujiente. Precio según peso."
    },

    {
      name: "Camarón",
      rdPrice: 1400,
      price: 27,
      image: "images/j14.jpg",
      icon: "🍤",
      description: "Deliciosos sabores del mar disponibles al ajillo, a la crema o al estilo criollo."
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
      description: "Una propuesta refrescante para disfrutar de una combinación especial de sabores."
    },

    {
      name: "Clarimar",
      rdPrice: 300,
      price: 8,
      image: "images/ss2.jpg",
      icon: "🌊",
      description: "Una creación con personalidad propia, perfecta para acompañar el ambiente tropical."
    },

    {
      name: "Scuba Coral Reef",
      rdPrice: 350,
      price: 9,
      image: "images/ss3.jpg",
      icon: "🐚",
      description: "Una mezcla especial inspirada en los colores y la frescura del Caribe."
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
      description: "Una mezcla frutal de textura suave, ideal para quienes prefieren una bebida con un toque de alcohol."
    },

    {
      name: "Sin alcohol",
      rdPrice: 250,
      price: 6,
      image: "images/h2.jpg",
      icon: "🥤",
      description: "Una alternativa refrescante y cremosa para disfrutar del sabor de la fruta sin alcohol."
    },

    {
      name: "Fresa",
      price: null,
      image: "images/h3.jpg",
      icon: "🍓",
      description: "Dulzura frutal y frescura en una mezcla suave, ideal para los amantes de la fresa."
    },

    {
      name: "Chinola",
      price: null,
      image: "images/h4.jpeg",
      icon: "🥭",
      description: "El sabor tropical de la fruta de la pasión, con un toque refrescante y ligeramente ácido."
    },

    {
      name: "Limón",
      price: null,
      image: "images/h5.jpg",
      icon: "🍋",
      description: "Un sabor cítrico y refrescante, perfecto para disfrutar de una pausa revitalizante."
    },

    {
      name: "Mixto",
      price: null,
      image: "images/h6.jpg",
      icon: "🍹",
      description: "Una combinación de sabores frutales que ofrece una experiencia refrescante en cada sorbo."
    },

    {
      name: "Fruta fresca",
      price: null,
      image: "images/h7.jpeg",
      icon: "🍍",
      description: "Una mezcla frutal de inspiración tropical, ideal para quienes buscan frescura en su bebida."
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
      description: "Una mezcla refrescante con notas cítricas y menta. Disponible en chinola, fresa, limón o blue."
    },

    {
      name: "Mojito Coco",
      rdPrice: 350,
      price: 9,
      image: "images/c2.jpg",
      icon: "🥥",
      description: "El frescor de la menta y los cítricos se combina con un delicado toque tropical de coco."
    },

    {
      name: "Mojito Chinola",
      rdPrice: 350,
      price: 9,
      image: "images/c26.jpeg",
      icon: "🥥",
      description: "Una combinación de menta, cítricos y el sabor tropical, ligeramente ácido, de la chinola."
    },

    {
      name: "Sex on the Beach",
      rdPrice: 300,
      price: 8,
      image: "images/c3.jpg",
      icon: "🍹",
      description: "Una mezcla frutal de perfil dulce y cítrico, perfecta para acompañar una tarde caribeña."
    },

    {
      name: "Piña Colada",
      rdPrice: 300,
      price: 8,
      image: "images/h5.jpeg",
      icon: "🍍",
      description: "La combinación tropical de piña y coco crea una bebida cremosa y llena de frescura."
    },

    {
      name: "Gin Tonic",
      rdPrice: 400,
      price: 9,
      image: "images/c5.jpg",
      icon: "🍸",
      description: "Una combinación clásica de ginebra y tónica, con un perfil fresco y ligeramente amargo."
    },

    {
      name: "Margarita Devil",
      rdPrice: 400,
      price: 10,
      image: "images/c6.jpg",
      icon: "🌶️",
      description: "Una versión atrevida de la margarita con un toque picante para quienes disfrutan los sabores intensos."
    },

    {
      name: "Margarita",
      rdPrice: 350,
      price: 9,
      image: "images/c7.jpg",
      icon: "🍹",
      description: "Una mezcla equilibrada de notas cítricas. Disponible en chinola, fresa, limón o blue."
    },

    {
      name: "Tinto de Verano",
      rdPrice: 300,
      price: 8,
      image: "images/c8.jpg",
      icon: "🍷",
      description: "Una combinación ligera y refrescante de vino tinto con un toque cítrico."
    },

    {
      name: "Long Island Blue",
      rdPrice: 400,
      price: 10,
      image: "images/c9.jpg",
      icon: "🧊",
      description: "Una versión de color azul del clásico Long Island, con una mezcla de sabores cítricos."
    },

    {
      name: "Long Island Normal",
      rdPrice: 400,
      price: 10,
      image: "images/c10.jpg",
      icon: "🍹",
      description: "Una mezcla intensa de destilados con notas cítricas y un perfil clásico."
    },

    {
      name: "Bananamama",
      rdPrice: 300,
      price: 8,
      image: "images/c11.jpg",
      icon: "🍌",
      description: "Una propuesta tropical con notas dulces de banana, ideal para disfrutar un sabor diferente."
    },

    {
      name: "Orgasmo",
      rdPrice: 350,
      price: 9,
      image: "images/c12.jpg",
      icon: "🍸",
      description: "Una combinación de sabores suaves y dulces para quienes prefieren un cóctel de perfil cremoso."
    },

    {
      name: "Red Apple",
      rdPrice: 275,
      price: 7,
      image: "images/c13.jpg",
      icon: "🍎",
      description: "Un perfil frutal con notas de manzana y un carácter fresco y agradable."
    },

    {
      name: "Bailey Martini",
      rdPrice: 350,
      price: 9,
      image: "images/c14.jpg",
      icon: "🍸",
      description: "Una propuesta cremosa que combina el carácter del martini con las notas dulces de Baileys."
    },

    {
      name: "Blue Lagoon",
      rdPrice: 350,
      price: 9,
      image: "images/c15.jpg",
      icon: "🌊",
      description: "Su llamativo tono azul y sus notas cítricas evocan la frescura de una laguna tropical."
    },

    {
      name: "Black Russian",
      rdPrice: 300,
      price: 8,
      image: "images/c16.jpg",
      icon: "🥃",
      description: "Un clásico de sabor intenso que combina vodka con las notas profundas del licor de café."
    },

    {
      name: "Blue Monday",
      rdPrice: 300,
      price: 8,
      image: "images/c17.jpg",
      icon: "💙",
      description: "Una propuesta de color azul y perfil intenso para quienes buscan una opción diferente."
    },

    {
      name: "Screwdriver",
      rdPrice: 300,
      price: 8,
      image: "images/c18.jpg",
      icon: "🍊",
      description: "Una combinación clásica de vodka y jugo de naranja, con un sabor cítrico y refrescante."
    },

    {
      name: "Blue Hawái",
      rdPrice: 300,
      price: 8,
      image: "images/c19.jpg",
      icon: "🌴",
      description: "Una mezcla de inspiración isleña con notas tropicales y un atractivo color azul."
    },

    {
      name: "Mai Tai",
      rdPrice: 350,
      price: 9,
      image: "images/c20.jpg",
      icon: "🍹",
      description: "Un clásico tropical que destaca por sus notas cítricas, frutales y un carácter equilibrado."
    },

    {
      name: "Tequila Rose",
      rdPrice: 350,
      price: 9,
      image: "images/c21.jpg",
      icon: "🌹",
      description: "Una propuesta de perfil dulce y cremoso con las notas características de Tequila Rose."
    },

    {
      name: "Dirty Monkey",
      rdPrice: 350,
      price: 9,
      image: "images/c22.jpg",
      icon: "🍌",
      description: "Una mezcla tropical de perfil dulce, ideal para quienes disfrutan las bebidas con notas de banana."
    },

    {
      name: "Daiquiri",
      rdPrice: 300,
      price: 8,
      image: "images/c23.jpg",
      icon: "🍋",
      description: "Un clásico de notas cítricas que combina frescura, acidez y un toque dulce."
    },

    {
      name: "Cuba Libre",
      rdPrice: 250,
      price: 6,
      image: "images/c24.jpg",
      icon: "🥤",
      description: "La combinación clásica de ron, refresco de cola y un toque de limón."
    },

    {
      name: "Santo Libre",
      rdPrice: 250,
      price: 6,
      image: "images/c25.jpg",
      icon: "🍋",
      description: "Una combinación refrescante de ron, refresco de limón y notas cítricas."
    }

  ]
},


/* ====================================================
   SHOTS
==================================================== */

{
  category: "shots",
  title: "Shots",
  icon: "🥃",

  items: [

    {
      name: "Mamajuana",
      rdPrice: 125,
      price: 4,
      image: "images/s1.jpg",
      icon: "🥃",
      description: "Una bebida tradicional dominicana con carácter especiado y un sabor lleno de personalidad."
    },

    {
      name: "Fireball",
      rdPrice: 175,
      price: 6,
      image: "images/s2.jpg",
      icon: "🔥",
      description: "Notas intensas de canela y un toque especiado que dejan una sensación cálida en el paladar."
    },

    {
      name: "Cielo Nublado",
      rdPrice: 200,
      price: 5,
      image: "images/s3.jpg",
      icon: "☁️",
      description: "Una propuesta de la casa para quienes desean descubrir una combinación diferente."
    },

    {
      name: "Café Celeste",
      rdPrice: 200,
      price: 4,
      image: "images/s4.jpg",
      icon: "☕",
      description: "Notas de café con un perfil aromático e intenso, ideal para los amantes de este sabor."
    },

    {
      name: "José Cuervo",
      rdPrice: 300,
      price: 7,
      image: "images/s5.jpg",
      icon: "🥃",
      description: "Una opción clásica de tequila, reconocida por su carácter distintivo."
    },

    {
      name: "Patrón",
      rdPrice: 350,
      price: 8,
      image: "images/s6.jpg",
      icon: "🥃",
      description: "Tequila de perfil definido, ideal para quienes aprecian los sabores tradicionales de este destilado."
    },

    {
      name: "Sambuca",
      rdPrice: 300,
      price: 7,
      image: "images/s7.jpg",
      icon: "🥃",
      description: "Licor italiano de notas anisadas y aroma característico, con un sabor dulce e intenso."
    }

  ]
}

];


/* ======================================================
   CONVERSIÓN RD$ → USD
====================================================== */

function rdToUsd(rd) {
  return rd / RD_PER_USD;
}


/* ======================================================
   FORMATO DE PRECIO: SOLO USD
====================================================== */

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "Consultar";
  }

  return `
    <span class="price-usd">
      $${price.toFixed(2)} USD
    </span>
  `;
}


/* ======================================================
   CREAR TARJETA DEL PRODUCTO
====================================================== */

function createMenuCard(item, section, index) {

  const imageHTML = item.image
    ? `
      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='flex';
        "
      >

      <span
        class="image-fallback"
        style="display:none;"
      >
        ${item.icon}
      </span>
    `
    : `
      <span class="image-fallback">
        ${item.icon}
      </span>
    `;

  return `
    <article
      class="menu-card"
      tabindex="0"
      role="button"
      aria-label="Ver ${item.name}"
      data-category="${section.category}"
      data-section="${section.title}"
      data-index="${index}"
    >

      <div class="item-image">
        ${imageHTML}

        <div class="view-hint">
          <span>VER</span>
        </div>

        <div class="price">
          ${formatPrice(item.price, item.rdPrice)}
        </div>
      </div>

      <div class="item-info">

        <h3>${item.name}</h3>

        <p>
          ${item.description}
        </p>

      </div>

    </article>
  `;
}


/* ======================================================
   MOSTRAR MENÚ
====================================================== */

function renderMenu(category = "all") {

  const menu = document.getElementById("menu");

  if (!menu) return;

  const sections = menuData.filter(section => {

    return (
      category === "all" ||
      section.category === category
    );

  });

  menu.innerHTML = sections.map(section => {

    return `
      <section
        class="menu-section"
        data-category="${section.category}"
      >

        <div class="section-heading">

          <h2 class="section-title">

            <span class="section-icon">
              ${section.icon}
            </span>

            <span>
              ${section.title}
            </span>

          </h2>

        </div>

        ${
          section.note
            ? `<p class="note">${section.note}</p>`
            : ""
        }

        <div class="menu-grid">

          ${section.items
            .map((item, index) =>
              createMenuCard(
                item,
                section,
                index
              )
            )
            .join("")}

        </div>

      </section>
    `;

  }).join("");

  attachCardEvents();

  setupImages();
}


/* ======================================================
   EVENTOS DE LAS TARJETAS
====================================================== */

function attachCardEvents() {

  document
    .querySelectorAll(".menu-card")
    .forEach(card => {

      card.addEventListener(
        "click",
        openItem
      );

      card.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            openItem.call(card);

          }

        }
      );

    });

}


/* ======================================================
   ABRIR MODAL
   SOLO FOTO
====================================================== */

function openItem() {

  const section = menuData.find(
    section =>
      section.title === this.dataset.section
  );

  if (!section) return;

  const item =
    section.items[
      Number(this.dataset.index)
    ];

  if (!item) return;

  const modal =
    document.getElementById("itemModal");

  const modalImage =
    document.getElementById("modalImage");

  const modalFallback =
    document.getElementById("modalImageFallback");


  /* -----------------------------------------------
     MOSTRAR FOTO
  ----------------------------------------------- */

  if (item.image && modalImage) {

    modalImage.src = item.image;

    modalImage.alt = item.name;

    modalImage.style.display = "block";

    if (modalFallback) {
      modalFallback.style.display = "none";
    }

    modalImage.onerror = () => {

      modalImage.style.display = "none";

      if (modalFallback) {
        modalFallback.textContent = item.icon;
        modalFallback.style.display = "flex";
      }

    };

  } else {

    if (modalImage) {
      modalImage.style.display = "none";
    }

    if (modalFallback) {
      modalFallback.textContent = item.icon;
      modalFallback.style.display = "flex";
    }

  }


  /* -----------------------------------------------
     ABRIR
  ----------------------------------------------- */

  if (!modal) return;

  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";

}


/* ======================================================
   CERRAR MODAL
====================================================== */

function closeModal() {

  const modal =
    document.getElementById("itemModal");

  if (!modal) return;

  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}


/* ======================================================
   FILTROS
====================================================== */

function setupFilters() {

  const buttons =
    document.querySelectorAll(
      ".filter-btn"
    );

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        buttons.forEach(btn => {

          btn.classList.remove(
            "active"
          );

        });

        button.classList.add(
          "active"
        );

        renderMenu(
          button.dataset.category
        );

        const searchInput =
          document.getElementById(
            "menuSearch"
          );

        if (searchInput) {
          searchInput.value = "";
        }

        window.scrollTo({

          top: 0,

          behavior: "smooth"

        });

      }
    );

  });

}


/* ======================================================
   MODAL
====================================================== */

function setupModal() {

  document
    .querySelectorAll(
      "[data-close-modal]"
    )
    .forEach(element => {

      element.addEventListener(
        "click",
        closeModal
      );

    });

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeModal();

      }

    }
  );

}


/* ======================================================
   BOTÓN VOLVER ARRIBA
====================================================== */

function setupBackToTop() {

  const button =
    document.getElementById(
      "backTop"
    );

  if (!button) return;

  window.addEventListener(
    "scroll",
    () => {

      button.classList.toggle(
        "visible",
        window.scrollY > 450
      );

    }
  );

  button.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    }
  );

}


/* ======================================================
   B
