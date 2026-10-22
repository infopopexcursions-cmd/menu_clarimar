
/*
========================================================
 LARIMAR CHILL ZONE - MENÚ DIGITAL
========================================================
*/

const RD_PER_USD = 60;

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
      description: "Jugosa, sabrosa y preparada al momento para disfrutar en cualquier ocasión."
    },

       {
      name: "Hamburguesa de la casa",
      rdPrice: 400,
      price: 15,
      image: "images/j23.jpeg",
      icon: "🍔",
      description: "Jugosa, sabrosa y preparada al momento para disfrutar en cualquier ocasión."
    },

    {
      name: "Fajita de pollo",
      rdPrice: 550,
      price: 15,
      image: "images/j19.jpeg",
      icon: "🌮",
      description: "Tiras de pollo sazonadas y cocinadas para ofrecer un bocado lleno de sabor."
    },

    {
      name: "Fajita de res",
      rdPrice: 600,
      price: 15,
      image: "images/j18.jpg",
      icon: "🥩",
      description: "Tiernas tiras de res sazonadas, ideales para quienes disfrutan de sabores intensos."
    },

    {
      name: "Carne salada",
      rdPrice: 600,
      price: 15,
      image: "images/j3.jpeg",
      icon: "🥩",
      description: "Una opción de sabor intenso, preparada con el toque especial de nuestra cocina."
    },

    {
      name: "Mofongo mar y tierra",
      rdPrice:,
      price: 30,
      image: "images/j22.jpeg",
      icon: "🍌",
      description: "Plátano majado combinado con chicharrón crujiente, en una deliciosa receta tradicional."
    },

    {
      name: "Mofongo de chicharrón",
      rdPrice: 1200,
      price: 20,
      image: "images/j5.jpeg",
      icon: "🍌",
      description: "Plátano majado combinado con chicharrón crujiente, en una deliciosa receta tradicional."
    },

    {
      name: "Mofongo de camarones",
      rdPrice: 1500,
      price: 25,
      image: "images/j9.jpg",
      icon: "🍤",
      description: "La combinación del plátano majado y el sabor del mar en una propuesta irresistible."
    },

    {
      name: "Alitas a la BBQ",
      rdPrice: 600,
      price: 15,
      image: "images/j4.jpeg",
      icon: "🍗",
      description: "Alitas bañadas en salsa barbacoa, perfectas para compartir y disfrutar."
    },

    {
      name: "3 Golpe Mangu",
      rdPrice: 650,
      price: 20,
      image: "images/j15.jpg",
      icon: "🍳",
      description: "Un desayuno dominicano tradicional que reúne mangú y sus tres acompañamientos clásicos. Consultar disponibilidad."
    },

    {
      name: "1 libra de chicharrón",
      rdPrice: null,
      price: null,
      image: "images/j21.jpg",
      icon: "🥓",
      description: "Piel crujiente y carne jugosa, ideal para compartir. Precio por libra; consultar disponibilidad."
    },

    {
      name: "Steak Sandwich",
      rdPrice: 600,
      price: 15,
      image: "images/j1.jpeg",
      icon: "🥪",
      description: "Una combinación de carne de res y pan, perfecta para una comida rápida y sabrosa."
    },

    {
      name: "Pechurina",
      rdPrice: 450,
      price: 15,
      image: "images/j2.jpeg",
      icon: "🍗",
      description: "Pollo empanizado con una textura crujiente por fuera y un interior jugoso."
    },

    {
      name: "Costillitas BBQ",
      rdPrice: 850,
      price: 15,
      image: "images/j11.jpg",
      icon: "🍖",
      description: "Costillas cubiertas de salsa barbacoa, con un toque dulce y ahumado."
    },

    {
      name: "Pescado Chillo",
      rdPrice: null,
      price: null,
      image: "images/j16.jpg",
      icon: "🐟",
      description: "Una opción de pescado fresco para los amantes de los sabores del mar. Precio por libra."
    },

    {
      name: "Pescado frito",
      rdPrice: null,
      price: null,
      image: "images/j6.jpg",
      icon: "🐟",
      description: "Pescado dorado y crujiente, ideal para disfrutar de una comida junto al mar. Precio por libra."
    },

    {
      name: "Camarón",
      rdPrice: 1400,
      price: 27,
      image: "images/j14.jpg",
      icon: "🍤",
      description: "Deliciosos camarones preparados a tu gusto: al ajillo, a la crema o al estilo criollo."
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
      description: "Una propuesta exclusiva para disfrutar de algo diferente en un ambiente caribeño."
    },

    {
      name: "Clarimar",
      rdPrice: 300,
      price: 8,
      image: "images/ss2.jpg",
      icon: "🌊",
      description: "Una creación de la casa que invita a relajarse y disfrutar cada momento."
    },

    {
      name: "Scuba Coral Reef",
      rdPrice: 350,
      price: 9,
      image: "images/ss3.jpg",
      icon: "🐚",
      description: "Una especialidad inspirada en los colores y la esencia tropical del Caribe."
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
      description: "Una mezcla frutal refrescante con un toque de alcohol para disfrutar en un ambiente tropical."
    },

    {
      name: "Sin alcohol",
      rdPrice: 250,
      price: 6,
      image: "images/h2.jpg",
      icon: "🥤",
      description: "Una bebida cremosa y refrescante, ideal para combatir el calor y disfrutar sin alcohol."
    },

    {
      name: "Fresa",
      price: null,
      image: "images/h3.jpg",
      icon: "🍓",
      description: "El dulzor y la frescura de la fresa en una mezcla suave y deliciosa."
    },

    {
      name: "Chinola",
      price: null,
      image: "images/h4.jpeg",
      icon: "🥭",
      description: "El sabor tropical de la chinola aporta un toque frutal y refrescante."
    },

    {
      name: "Limón",
      price: null,
      image: "images/h5.jpg",
      icon: "🍋",
      description: "Una combinación cítrica y refrescante para quienes prefieren sabores intensos."
    },

    {
      name: "Mixto",
      price: null,
      image: "images/h6.jpg",
      icon: "🍹",
      description: "Una mezcla de sabores frutales que ofrece una experiencia fresca y tropical."
    },

    {
      name: "Fruta fresca",
      price: null,
      image: "images/h7.jpeg",
      icon: "🍍",
      description: "Una alternativa frutal para disfrutar de una bebida refrescante con un toque natural."
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
      description: "Una mezcla refrescante con notas cítricas y opciones de chinola, fresa, limón o blue."
    },

    {
      name: "Mojito Coco",
      rdPrice: 350,
      price: 9,
      image: "images/c2.jpg",
      icon: "🥥",
      description: "La frescura del mojito se combina con un delicado toque tropical de coco."
    },

    {
      name: "Mojito Chinola",
      rdPrice: 350,
      price: 9,
      image: "images/c26.jpeg",
      icon: "🥥",
      description: "El carácter cítrico y tropical de la chinola se une a la frescura de esta mezcla."
    },

    {
      name: "Sex on the Beach",
      rdPrice: 300,
      price: 8,
      image: "images/c3.jpg",
      icon: "🍹",
      description: "Un clásico de notas frutales, conocido por su sabor suave y su estilo veraniego."
    },

    {
      name: "Piña Colada",
      rdPrice: 300,
      price: 8,
      image: "images/h5.jpeg",
      icon: "🍍",
      description: "Una combinación tropical de piña y coco, perfecta para relajarse junto al mar."
    },

    {
      name: "Gin Tonic",
      rdPrice: 400,
      price: 9,
      image: "images/c5.jpg",
      icon: "🍸",
      description: "Una mezcla clásica de ginebra y tónica, con un perfil fresco y equilibrado."
    },

    {
      name: "Margarita Devil",
      rdPrice: 400,
      price: 10,
      image: "images/c6.jpg",
      icon: "🌶️",
      description: "Una versión atrevida de la margarita, con un toque picante que despierta el paladar."
    },

    {
      name: "Margarita",
      rdPrice: 350,
      price: 9,
      image: "images/c7.jpg",
      icon: "🍹",
      description: "Un clásico de carácter cítrico, disponible en sabores de chinola, fresa, limón o blue."
    },

    {
      name: "Tinto de Verano",
      rdPrice: 300,
      price: 8,
      image: "images/c8.jpg",
      icon: "🍷",
      description: "Una bebida ligera y refrescante, ideal para disfrutar de una tarde relajada."
    },

    {
      name: "Long Island Blue",
      rdPrice: 400,
      price: 10,
      image: "images/c9.jpg",
      icon: "🧊",
      description: "Una versión azul del famoso Long Island, con una presentación llamativa y un perfil intenso."
    },

    {
      name: "Long Island Normal",
      rdPrice: 400,
      price: 10,
      image: "images/c10.jpg",
      icon: "🍹",
      description: "Un cóctel de sabor intenso que reúne varios destilados en una mezcla clásica."
    },

    {
      name: "Bananamama",
      rdPrice: 300,
      price: 8,
      image: "images/c11.jpg",
      icon: "🍌",
      description: "Una propuesta tropical con notas dulces de banana para disfrutar un sabor diferente."
    },

    {
      name: "Orgasmo",
      rdPrice: 350,
      price: 9,
      image: "images/c12.jpg",
      icon: "🍸",
      description: "Una mezcla especial para quienes buscan una experiencia diferente en cada sorbo."
    },

    {
      name: "Red Apple",
      rdPrice: 275,
      price: 7,
      image: "images/c13.jpg",
      icon: "🍎",
      description: "Notas frutales de manzana que aportan un perfil dulce y agradable."
    },

    {
      name: "Bailey Martini",
      rdPrice: 350,
      price: 9,
      image: "images/c14.jpg",
      icon: "🍸",
      description: "Una combinación cremosa con Baileys, ideal para quienes prefieren sabores suaves."
    },

    {
      name: "Blue Lagoon",
      rdPrice: 350,
      price: 9,
      image: "images/c15.jpg",
      icon: "🌊",
      description: "Un cóctel de color azul intenso con un perfil fresco y cítrico."
    },

    {
      name: "Black Russian",
      rdPrice: 300,
      price: 8,
      image: "images/c16.jpg",
      icon: "🥃",
      description: "Un clásico de carácter intenso que combina vodka y licor de café."
    },

    {
      name: "Blue Monday",
      rdPrice: 300,
      price: 8,
      image: "images/c17.jpg",
      icon: "💙",
      description: "Una propuesta de tonos azules para quienes disfrutan de cócteles con personalidad."
    },

    {
      name: "Screwdriver",
      rdPrice: 300,
      price: 8,
      image: "images/c18.jpg",
      icon: "🍊",
      description: "Una mezcla sencilla y refrescante de vodka y jugo de naranja."
    },

    {
      name: "Blue Hawái",
      rdPrice: 300,
      price: 8,
      image: "images/c19.jpg",
      icon: "🌴",
      description: "Una combinación tropical de color azul, ideal para acompañar el ambiente caribeño."
    },

    {
      name: "Mai Tai",
      rdPrice: 350,
      price: 9,
      image: "images/c20.jpg",
      icon: "🍹",
      description: "Un clásico tropical con notas cítricas y un carácter inspirado en el Caribe."
    },

    {
      name: "Tequila Rose",
      rdPrice: 350,
      price: 9,
      image: "images/c21.jpg",
      icon: "🌹",
      description: "Una bebida de perfil dulce y cremoso con el distintivo sabor de Tequila Rose."
    },

    {
      name: "Dirty Monkey",
      rdPrice: 350,
      price: 9,
      image: "images/c22.jpg",
      icon: "🍌",
      description: "Una mezcla tropical de notas dulces, ideal para los amantes de los sabores frutales."
    },

    {
      name: "Daiquiri",
      rdPrice: 300,
      price: 8,
      image: "images/c23.jpg",
      icon: "🍋",
      description: "Un clásico refrescante de ron y cítricos, con un equilibrio entre dulzor y acidez."
    },

    {
      name: "Cuba Libre",
      rdPrice: 250,
      price: 6,
      image: "images/c24.jpg",
      icon: "🥤",
      description: "La combinación clásica de ron, refresco de cola y un toque cítrico."
    },

    {
      name: "Santo Libre",
      rdPrice: 250,
      price: 6,
      image: "images/c25.jpg",
      icon: "🍋",
      description: "Una mezcla dominicana de ron, refresco de limón y un toque cítrico."
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
      description: "Una bebida tradicional dominicana con un carácter especiado y auténtico."
    },

    {
      name: "Fireball",
      rdPrice: 175,
      price: 6,
      image: "images/s2.jpg",
      icon: "🔥",
      description: "Un shot con notas de canela y un toque cálido e intenso."
    },

    {
      name: "Cielo Nublado",
      rdPrice: 200,
      price: 5,
      image: "images/s3.jpg",
      icon: "☁️",
      description: "Una creación de la casa para quienes desean probar algo diferente."
    },

    {
      name: "Café Celeste",
      rdPrice: 200,
      price: 4,
      image: "images/s4.jpg",
      icon: "☕",
      description: "Una opción con notas de café para disfrutar de un sabor tostado y distintivo."
    },

    {
      name: "José Cuervo",
      rdPrice: 300,
      price: 7,
      image: "images/s5.jpg",
      icon: "🥃",
      description: "Tequila reconocido por su carácter marcado y su tradición mexicana."
    },

    {
      name: "Patrón",
      rdPrice: 350,
      price: 8,
      image: "images/s6.jpg",
      icon: "🥃",
      description: "Tequila de perfil distintivo, ideal para quienes aprecian los sabores del agave."
    },

    {
      name: "Sambuca",
      rdPrice: 300,
      price: 7,
      image: "images/s7.jpg",
      icon: "🥃",
      description: "Licor italiano con notas dulces y aromáticas de anís."
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
   BÚSQUEDA
====================================================== */

function setupSearch() {

  const searchInput =
    document.getElementById(
      "menuSearch"
    );

  if (!searchInput) return;

  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .trim()
          .toLowerCase();

      document
        .querySelectorAll(
          ".menu-card"
        )
        .forEach(card => {

          const name =
            card
              .querySelector("h3")
              ?.textContent
              .toLowerCase() || "";

          const description =
            card
              .querySelector("p")
              ?.textContent
              .toLowerCase() || "";

          const match =
            name.includes(query) ||
            description.includes(query);

          card.style.display =
            match ? "" : "none";

        });

    }
  );

}


/* ======================================================
   IMÁGENES
====================================================== */

function setupImages() {

  document
    .querySelectorAll(
      ".item-image img"
    )
    .forEach(image => {

      image.addEventListener(
        "error",
        () => {

          image.style.display =
            "none";

          const fallback =
            image.nextElementSibling;

          if (fallback) {

            fallback.style.display =
              "flex";

          }

        },
        {
          once: true
        }
      );

    });

}


/* ======================================================
   INICIALIZACIÓN
====================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderMenu();

    setupFilters();

    setupModal();

    setupBackToTop();

    setupSearch();

    setupImages();

  }
);

