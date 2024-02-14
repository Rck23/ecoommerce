
// Importa el componente 'AddToCart' que permite agregar productos al carrito de compras.
import AddToCart from '@/components/products/AddToCart';
// Importa los datos de los productos desde un módulo de datos.
import { data } from '@/lib/data';
import { productServices } from '@/lib/services/productService';
// Importa el componente 'Image' de Next.js para optimizar la carga de imágenes.
import Image from 'next/image';
// Importa el componente 'Link' de Next.js para la navegación entre páginas sin recargar la página.
import Link from 'next/link';
// Importa React, aunque no se utiliza directamente en este archivo, ya que Next.js lo importa automáticamente.
import React from 'react';


export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productServices.getBySlug(params.slug)
  if (!product) {
    return { title: 'Producto no encontrado' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({params, }: {params: {slug: string}} ) {


  // Busca el producto en la lista de productos basándose en el slug proporcionado en los parámetros de la URL.
  const product = await productServices.getBySlug(params.slug)

  // Si el producto no se encuentra, muestra un mensaje de error.
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Retorna el JSX que representa la interfaz de usuario de los detalles del producto.
  return (
    <>
      {/* Enlace para volver a la lista de productos */}
      <div className='my-2 '>
   

          <Link href='/' className='btn btn-ghost my-5'>
            Volver a los productos  
          </Link>

      </div>

      {/* Grilla para organizar la información del producto */}
      <div className='grid md:grid-cols-4 md:gap-3'>
        {/* Sección de la imagen del producto */}
        <div className='md:col-span-2'>
          <Image  
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            sizes='100vw'
            style={{
              width:'100%',
              height: 'auto'
            }}
          />
        </div>

        {/* Sección de detalles del producto */}
        <div>
          <ul className='space-y-4'>
            <li>
              <h1 className='text-xl'>{product.name}</h1>
            </li>
            <li>
              {product.rating} de {product.numReviews} opiniones
            </li>
            <li>
              {product.brand}
            </li>
            <li className='divider'></li>
            <li>
              Descripción: <p>{product.description}</p>
            </li>
          </ul>
        </div>

        {/* Sección de información adicional y acción de agregar al carrito */}
        <div>
          <div className='card bg-base-300 shadow-xl mt-3 md:mt-0'>  
            <div className='card-body'>  
              {/* Información de precio */}
              <div className='flex mb-2 justify-between'>
                <div>Precio</div>
                <div>${product.price}</div>
              </div>

              {/* Información de disponibilidad */}
              <div className='flex mb-2 justify-between'>
                <div>Estatus</div>
                <div>{product.countInStock >  0 ? 'Disponible': 'Agotado'}</div>
              </div>

              {/* Botón para agregar al carrito si el producto está disponible */}
              {product.countInStock !==  0 && (
                <div className='card-actions justify-center'>
                  <AddToCart item={{ ...product, qty:  0, color: '', size: '' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
