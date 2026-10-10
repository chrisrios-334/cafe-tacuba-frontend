const cartilla = [
  {
    categoria: "Cafés calientes",
    clase: "",
    productos: [
      {
        nombre: "Espresso",
        descripcion: "Café intenso y aromático",
        imagen: "img/americano.webp",
        precio: 1500,
        contiene: `
        "Café molido fresco",
        "Agua filtrada",
        "Taza pequeña",
        "Aroma intenso",
        "Cuerpo fuerte"`,
      },
      {
        nombre: "Latte",
        descripcion: "Espresso con leche vaporizada",
        imagen: "img/latte.webp",
        precio: 2200,
        contiene: `
        "Espresso",
        "Leche vaporizada",
        "Espuma ligera",
        "Taza grande",
        "Opcional: arte latte"`,
      },
      {
        nombre: "Cappuccino",
        descripcion: "Espresso, leche espumosa y cacao",
        imagen: "img/cappuccino.webp",
        precio: 2400,
        contiene: `
        "Espresso",
        "Leche vaporizada",
        "Espuma abundante",
        "Cacao en polvo",
        "Taza mediana"`,
      },
      {
        nombre: "Mocha",
        descripcion: "Espresso, chocolate y leche",
        imagen: "img/cafe_mocha.jpg",
        precio: 2700,
        contiene: `
        "Espresso",
        "Chocolate derretido",
        "Leche vaporizada",
        "Crema opcional",
        "Cacao espolvoreado"`,
      },
      {
        nombre: "Macchiato",
        descripcion: "Espresso con un toque de leche espumada",
        imagen: "img/macchiato.jpeg",
        precio: 2100,
        contiene: `
        "Espresso",
        "Espuma de leche",
        "Taza pequeña",
        "Sabor intenso",
        "Toque cremoso"`,
      },
    ],
  },
  {
    categoria: "Bebidas frías",
    clase: "bg-light",
    productos: [
      {
        nombre: "Affogato",
        descripcion: "Helado bañado en espresso caliente",
        imagen: "img/affogato.jpg",
        precio: 2800,
        contiene: `
        "Helado de vainilla",
        "Espresso caliente",
        "Taza o copa de postre",
        "Textura cremosa",
        "Contraste frío-caliente"`,
      },
      {
        nombre: "Iced Latte",
        descripcion: "Latte con hielo y leche fría",
        imagen: "img/icedLatte.jpeg",
        precio: 2500,
        contiene: `
        "Espresso",
        "Leche fría",
        "Cubos de hielo",
        "Vaso alto",
        "Sabor suave y refrescante"`,
      },
      {
        nombre: "Cold Brew",
        descripcion: "Extracción en frío 12 horas",
        imagen: "img/cafe.JPG",
        precio: 2600,
        contiene: `
        "Café molido grueso",
        "Agua filtrada fría",
        "Proceso de 12 horas",
        "Vaso con hielo",
        "Sabor menos ácido"`,
      },
      {
        nombre: "Frappé de cacao",
        descripcion: "Hielo, cacao y crema batida",
        imagen: "img/Frappé de cacao.jpeg",
        precio: 3000,
        contiene: `
        "Cubos de hielo",
        "Cacao en polvo",
        "Leche fría",
        "Crema batida",
        "Textura espesa y dulce"`,
      },
    ],
  },
  {
    categoria: "Infusiones y té",
    clase: "",
    productos: [
      {
        nombre: "Té negro de la casa",
        descripcion: "Con opción de leche o limón",
        imagen: "img/teNegro.jpeg",
        precio: 1800,
        contiene: `
        "Hojas de té negro",
        "Agua caliente",
        "Opción de leche",
        "Rodaja de limón",
        "Taza mediana"`,
      },
      {
        nombre: "Té verde",
        descripcion: "Suave y refrescante",
        imagen: "img/teverde.jpeg",
        precio: 1800,
        contiene: `
        "Hojas de té verde",
        "Agua caliente",
        "Taza pequeña",
        "Aroma herbal",
        "Sabor ligero"`,
      },
      {
        nombre: "Infusión de jazmín",
        descripcion: "Floral y delicada",
        imagen: "img/tedejazmin.jpeg",
        precio: 2000,
        contiene: `
        "Flores de jazmín",
        "Agua caliente",
        "Taza de porcelana",
        "Aroma floral",
        "Sabor delicado"`,
      },
      {
        nombre: "Submarino",
        descripcion: "Cacao a la taza con leche",
        imagen: "img/submarino.jpeg",
        precio: 2200,
        contiene: `
        "Tableta de chocolate",
        "Leche caliente",
        "Taza grande",
        "Sabor intenso",
        "Textura cremosa"`,
      },
    ],
  },
  {
    categoria: "Dulces y postres",
    clase: "bg-light",
    productos: [
      {
        nombre: "Medialuna",
        descripcion: "Recién horneada",
        imagen: "img/medialuna.jpeg",
        precio: 900,
        contiene: `
        "Harina de trigo",
        "Manteca",
        "Azúcar",
        "Levadura",
        "Glaseado ligero"`,
      },
      {
        nombre: "Brownie",
        descripcion: "Con nueces y chocolate fundido",
        imagen: "img/brownie.jpg",
        precio: 2300,
        contiene: `
        "Chocolate amargo",
        "Manteca",
        "Azúcar",
        "Huevos",
        "Nueces picadas"`,
      },
      {
        nombre: "Lemon Pie",
        descripcion: "Tarta de limón con merengue",
        imagen: "img/Lemon Pie.jpeg",
        precio: 2500,
        contiene: `
        "Base de masa",
        "Crema de limón",
        "Azúcar",
        "Huevos",
        "Merengue italiano"`,
      },
      {
        nombre: "Cheesecake",
        descripcion: "Con salsa de frutos rojos",
        imagen: "img/Cheesecake.jpeg",
        precio: 2800,
        contiene: `
        "Queso crema",
        "Base de galletas",
        "Azúcar",
        "Huevos",
        "Salsa de frutos rojos"`,
      },
      {
        nombre: "Alfajor de maicena",
        descripcion: "Clásico, con dulce de leche",
        imagen: "img/Alfajor de maicena.jpeg",
        precio: 1200,
        contiene: `
        "Maicena",
        "Harina",
        "Manteca",
        "Dulce de leche",
        "Coco rallado"`,
      },
    ],
  },
];

export default cartilla;
