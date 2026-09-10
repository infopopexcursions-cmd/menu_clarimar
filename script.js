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
        price: 12,
        image: "images/j20.jpg",
        icon: "🍔",
        description: "Hamburguesa estilo casa."
      },

      {
        name: "Fajita de pollo",
        price: 15,
        image: "images/j19.jpg",
        icon: "🌮",
        description: "Fajitas de pollo."
      },

      {
        name: "Fajita de res",
        price: 15,
        image: "images/j18.jpg",
        icon: "🥩",
        description: "Fajitas de res."
      },

      {
        name: "Carne salada",
        price: 15,
        image: "images/j3.jpeg",
        icon: "🥩",
        description: "Carne salada preparada al estilo de la casa."
      },

      {
        name: "Mofongo de chicharrón",
        price: 20,
        image: "images/j5.jpeg",
        icon: "🍌",
        description: "Mofongo tradicional con chicharrón."
      },

      {
        name: "Mofongo de camarones",
        price: 25,
        image: "images/j9.jpg",
        icon: "🍤",
        description: "Mofongo con camarones."
      },

      {
        name: "Alitas a la BBQ",
        price: 15,
        image: "images/j4.jpeg",
        icon: "🍗",
        description: "Alitas preparadas al estilo de la casa."
      },

      {
        name: "3 Golpe Mangu",
        price: 20,
        image: "images/j15.jpg",
        icon: "🍳",
        description: "Mangú con tres golpes. Consultar disponibilidad."
      },

      {
        name: "1 libra de chicharrón",
        price: null,
        image: "images/j21.jpg",
        icon: "🥓",
        description: "Precio por libra. Consultar."
      },

      {
        name: "Steak Sandwich",
        price: 15,
        image: "images/j17.jpg",
        icon: "🥪",
        description: "Sándwich de steak."
      },

      {
        name: "Pechurina",
        price: 15,
        image: "images/j2.jpeg",
        icon: "🍗",
        description: "Pechurina preparada al estilo de la casa."
      },

      {
        name: "HotDogs",
        price: 15,
        image: "images/j1.jpeg",
        icon: "🌭",
        description: "HotDog dominicano."
      },

      {
        name: "Pescado Chillo",
        price: 30,
        image: "images/j16.jpg",
        icon: "🐟",
        description: "Precio por libra."
      },

      {
        name: "Pescado Cotorra",
        price: 25,
        image: "images/j6.jpg",
        icon: "🐟",
        description: "Precio por libra."
      },

      {
        name: "Camarón",
        price: 27,
        image: "images/j14.jpg",
        icon: "🍤",
        description: "Disponible al ajillo, a la crema o criollo."
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
        price: rdToUsd(300),
        image: "images/ss1.jpg",
        icon: "🍹",
        description: "Especialidad de la casa."
      },

      {
        name: "Clarimar",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/ss2.jpg",
        icon: "🌊",
        description: "Especialidad de la casa."
      },

      {
        name: "Scuba Coral Reef",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/ss3.jpg",
        icon: "🐚",
        description: "Especialidad de la casa."
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
        price: rdToUsd(275),
        image: "images/h1.jpg",
        icon: "🍓",
        description: "Smoothie preparado con fruta."
      },

      {
        name: "Sin alcohol",
        rdPrice: 250,
        price: rdToUsd(250),
        image: "images/h2.jpg",
        icon: "🥤",
        description: "Smoothie sin alcohol."
      },

      {
        name: "Fresa",
        price: null,
        image: "images/h3.jpg",
        icon: "🍓",
        description: "Smoothie de fresa."
      },

      {
        name: "Chinola",
        price: null,
        image: "images/h4.jpg",
        icon: "🥭",
        description: "Smoothie de chinola."
      },

      {
        name: "Limón",
        price: null,
        image: "images/h5.jpg",
        icon: "🍋",
        description: "Smoothie de limón."
      },

      {
        name: "Mixto",
        price: null,
        image: "images/h6.jpg",
        icon: "🍹",
        description: "Smoothie mixto."
      },

      {
        name: "Fruta fresca",
        price: null,
        image: "images/h7.jpg",
        icon: "🍍",
        description: "Smoothie de fruta fresca."
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
        price: rdToUsd(300),
        image: "images/c1.jpg",
        icon: "🍸",
        description: "Chinola, fresa, limón o blue."
      },

      {
        name: "Mojito Coco",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c2.jpg",
        icon: "🥥",
        description: "Mojito de coco."
      },

      {
        name: "Sex on the Beach",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c3.jpg",
        icon: "🍹",
        description: "Cóctel clásico."
      },

      {
        name: "Piña Colada",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c4.jpg",
        icon: "🍍",
        description: "Cóctel tropical."
      },

      {
        name: "Gin Tonic",
        rdPrice: 400,
        price: rdToUsd(400),
        image: "images/c5.jpg",
        icon: "🍸",
        description: "Gin tonic."
      },

      {
        name: "Margarita Devil",
        rdPrice: 400,
        price: rdToUsd(400),
        image: "images/c6.jpg",
        icon: "🌶️",
        description: "Margarita con toque picante."
      },

      {
        name: "Margarita",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c7.jpg",
        icon: "🍹",
        description: "Chinola, fresa, limón o blue."
      },

      {
        name: "Tinto de Verano",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c8.jpg",
        icon: "🍷",
        description: "Tinto de verano."
      },

      {
        name: "Long Island Blue",
        rdPrice: 400,
        price: rdToUsd(400),
        image: "images/c9.jpg",
        icon: "🧊",
        description: "Long Island en versión blue."
      },

      {
        name: "Long Island Normal",
        rdPrice: 400,
        price: rdToUsd(400),
        image: "images/c10.jpg",
        icon: "🍹",
        description: "Long Island clásico."
      },

      {
        name: "Bananamama",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c11.jpg",
        icon: "🍌",
        description: "Cóctel tropical de banana."
      },

      {
        name: "Orgasmo",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c12.jpg",
        icon: "🍸",
        description: "Cóctel de la casa."
      },

      {
        name: "Red Apple",
        rdPrice: 275,
        price: rdToUsd(275),
        image: "images/c13.jpg",
        icon: "🍎",
        description: "Cóctel de manzana."
      },

      {
        name: "Bailey Martini",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c14.jpg",
        icon: "🍸",
        description: "Martini con Baileys."
      },

      {
        name: "Blue Lagoon",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c15.jpg",
        icon: "🌊",
        description: "Cóctel azul tropical."
      },

      {
        name: "Black Russian",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c16.jpg",
        icon: "🥃",
        description: "Cóctel clásico."
      },

      {
        name: "Blue Monday",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c17.jpg",
        icon: "💙",
        description: "Cóctel clásico en azul."
      },

      {
        name: "Screwdriver",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c18.jpg",
        icon: "🍊",
        description: "Cóctel de naranja."
      },

      {
        name: "Blue Hawái",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c19.jpg",
        icon: "🌴",
        description: "Cóctel tropical azul."
      },

      {
        name: "Mai Tai",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c20.jpg",
        icon: "🍹",
        description: "Cóctel tropical."
      },

      {
        name: "Tequila Rose",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c21.jpg",
        icon: "🌹",
        description: "Cóctel con Tequila Rose."
      },

      {
        name: "Dirty Monkey",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/c22.jpg",
        icon: "🍌",
        description: "Cóctel tropical."
      },

      {
        name: "Daiquiri",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/c23.jpg",
        icon: "🍋",
        description: "Daiquiri."
      },

      {
        name: "Cuba Libre",
        rdPrice: 250,
        price: rdToUsd(250),
        image: "images/c24.jpg",
        icon: "🥤",
        description: "Cuba Libre."
      },

      {
        name: "Santo Libre",
        rdPrice: 250,
        price: rdToUsd(250),
        image: "images/c25.jpg",
        icon: "🍋",
        description: "Santo Libre."
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
        price: rdToUsd(125),
        image: "images/s1.jpg",
        icon: "🥃",
        description: "Shot dominicano."
      },

      {
        name: "Fireball",
        rdPrice: 175,
        price: rdToUsd(175),
        image: "images/s2.jpg",
        icon: "🔥",
        description: "Shot Fireball."
      },

      {
        name: "Cielo Nublado",
        rdPrice: 200,
        price: rdToUsd(200),
        image: "images/s3.jpg",
        icon: "☁️",
        description: "Shot de la casa."
      },

      {
        name: "Café Celeste",
        rdPrice: 200,
        price: rdToUsd(200),
        image: "images/s4.jpg",
        icon: "☕",
        description: "Shot de café."
      },

      {
        name: "José Cuervo",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/s5.jpg",
        icon: "🥃",
        description: "Shot de tequila."
      },

      {
        name: "Patrón",
        rdPrice: 350,
        price: rdToUsd(350),
        image: "images/s6.jpg",
        icon: "🥃",
        description: "Shot de tequila."
      },

      {
        name: "Sambuca",
        rdPrice: 300,
        price: rdToUsd(300),
        image: "images/s7.jpg",
        icon: "🥃",
        description: "Shot de Sambuca."
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
   FORMATO DE PRECIO
====================================================== */

function formatPrice(price, rdPrice = null) {

  if (price === null || price === undefined) {
    return "Consultar";
  }

  if (rdPrice !== null && rdPrice !== undefined) {

    return `
      <span class="price-rd">
        RD$${rdPrice.toFixed(0)}
      </span>

      <span class="price-separator">|</span>

      <span class="price-usd">
        $${price.toFixed(2)} USD
      </span>
    `;
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
