// Importa la biblioteca 'bcryptjs' para encriptar contraseñas.
import bcrypt from 'bcryptjs';

// Define el objeto 'data' que contiene datos de usuarios y productos.
export const data = {
  users: [
    {
      // Información del primer usuario.
      name: "Ulises",
      email: "admin@gmail.com",
      // Contraseña encriptada utilizando 'bcryptjs'.
      password: bcrypt.hashSync("123456"),
      // Indica si el usuario es administrador.
      isAdmin: true,
    },
    {
      // Información del segundo usuario.
      name: "Ana",
      email: "usuario@gmail.com",
      // Contraseña encriptada utilizando 'bcryptjs'.
      password: bcrypt.hashSync("123456"),
      // Indica si el usuario es administrador.
      isAdmin: false,
    },
  ],
  products: [
    {
      // Información del primer producto.
      name: "Playera Nike (negra)",
      slug: "tshirt-nike-asoe",
      category: "playera",
      image: "https://zonasport.com.mx/wp-content/uploads/2022/06/just-do-it.jpg",
      price:  799,
      brand: "Nike",
      rating:  3.4,
      numReviews:  8,
      countInStock:  13,
      description: "popular playera",
      isFeatured: true,
      banner: "https://www.qualitare.com/wp-content/uploads/2021/01/nike-banner.png",
    },
    {
      // Información del segundo producto.
      name: "Air Force  1",
      slug: "shoes-nike-force1",
      category: "tenis",
      image: "https://imagenes.elpais.com/resizer/JJemtCE2GRHe4JInlyD9pCotMyo=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/D2ONULSKOJFBDJCDEI3F6L7SNM.png",
      price:  2199,
      brand: "Nike",
      rating:  4.9,
      numReviews:  55,
      countInStock:  13,
      description: "popular tenis muchos colores",
      isFeatured: true,
      banner: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35f33d71916569.5bd5fd16e0ad4.jpg",
    },
  ],
};
