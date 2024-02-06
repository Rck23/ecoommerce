export type OrderItem = {
    // El nombre del producto.
    name: string;
    // Un identificador único para el producto, a menudo utilizado para URLs y referencias a la base de datos.
    slug: string;
    // La cantidad del producto que el cliente desea comprar.
    qty: number;
    // La URL de la imagen del producto.
    image: string;
    // El color de la variante del producto que se está ordenando.
    color: string;
    // El precio del producto por unidad.
    price: number;
    // El tamaño de la variante del producto que se está ordenando.
    size: string;
  };
  