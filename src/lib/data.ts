import bcrypt from 'bcryptjs'
export const data = {
  users: [
    {
      name: "Ulises",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Ana",
      email: "usuario@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Playera Nike (negra)",
      slug: "tshirt-nike-asoe",
      category: "playera",
      image:
        "https://zonasport.com.mx/wp-content/uploads/2022/06/just-do-it.jpg",
      price: 799,
      brand: "Nike",
      rating: 3.4,
      numReviews: 8,
      countInStock: 13,
      description: "popular playera",
      isFeatured: true,
      banner:
        "https://www.qualitare.com/wp-content/uploads/2021/01/nike-banner.png",
    },

    {
      name: "Air Force 1",
      slug: "shoes-nike-force1",
      category: "tenis",
      image:
        "https://m.media-amazon.com/images/I/31ND78V4VNL._AC_SY1000_.jpg",
      price: 2199,
      brand: "Nike",
      rating: 4.9,
      numReviews: 55,
      countInStock: 13,
      description: "popular tenis muchos colores",
      isFeatured: true,
      banner:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35f33d71916569.5bd5fd16e0ad4.jpg",
    },
  ],
};
