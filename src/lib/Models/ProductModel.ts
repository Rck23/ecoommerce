import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    // El nombre del producto.
    name: { type: String, required: true },
    // Un identificador único para el producto, a menudo utilizado para URLs y referencias a la base de datos.
    slug: { type: String, required: true, unique: true },
    // La categoría a la que pertenece el producto.
    category: { type: String, required: true },
    // La URL de la imagen del producto.
    image: { type: String, required: true },
    // El precio del producto.
    price: { type: Number, required: true },
    // La marca del producto.
    brand: { type: String, required: true },
    // La calificación promedio del producto basada en las revisiones.
    rating: { type: Number, required: true, default:   0 },
    // El número de revisiones que el producto ha recibido.
    numReviews: { type: Number, required: true, default:   0 },
    // El número de unidades del producto disponibles en stock.
    countInStock: { type: Number, required: true, default:   0 },
    // Una descripción del producto.
    description: { type: String, required: true },
    // Una bandera que indica si el producto está destacado.
    isFeatured: { type: Boolean, default: false },
    // Un campo opcional para una imagen de banner asociada con el producto.
    banner: String,
  },
  {
    // Indica que Mongoose debe administrar automáticamente las propiedades `createdAt` y `updatedAt`.
    timestamps: true,
  }
);


// Intenta obtener el modelo 'Product' si ya ha sido definido anteriormente.
// Si no existe, crea un nuevo modelo con el nombre 'Product' utilizando el esquema 'productSchema'.
const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema);

// Exporta el modelo 'ProductModel' para que pueda ser utilizado en otras partes de la aplicación.
export default ProductModel;




export type Product = { 

    _id?: string,
    name: string,
    slug: string, 
    image: string,
    banner?: string, 
    price: number,
    brand: string,
    category: string,
    description: string, 
    rating: number, 
    numReviews: number,
    countInStock: number,
    colors?: [],
    sizes?: []
}