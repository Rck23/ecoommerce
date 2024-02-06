// Importa el tipo 'Product' del modelo de productos para tipar el objeto 'product' que se pasa como propiedad.
import { Product } from "@/lib/Models/ProductModel";
// Importa React, aunque no se utiliza directamente en este archivo, ya que Next.js lo importa automáticamente.
import React from "react";
// Importa el componente 'Link' de Next.js para la navegación entre páginas sin recargar la página.
import Link from "next/link";
// Importa el componente 'Image' de Next.js para optimizar la carga de imágenes.
import Image from "next/image";

// Define el componente 'ProductItem' que recibe un objeto 'product' de tipo 'Product' como propiedad.
export default function ProductItem({ product }: { product: Product }) {
  // Retorna el JSX que representa la tarjeta de un producto individual.
  return (
    <div className="card mb-4 bg-base-300 shadow-xl">
      {/* Figura que contiene la imagen del producto, que es un enlace al detalle del producto. */}
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="h-64 object-cover w-full"
          />
        </Link>
      </figure>

      {/* Cuerpo de la tarjeta que contiene el título del producto, la marca y el precio. */}
      <div className="card-body">
        {/* Enlace al detalle del producto con el nombre del producto como título. */}
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        {/* Marca del producto. */}
        <p className="mb-2">{product.brand}</p>
        {/* Acciones de la tarjeta que muestra el precio del producto. */}
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
