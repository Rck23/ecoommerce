// Importa el componente 'ProductItem' que se utiliza para mostrar cada producto individualmente.
import ProductItem from '@/components/products/ProductItem';
// Importa los datos de los productos desde un módulo de datos.
import { data } from '@/lib/data';
import { productServices } from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Next Amazona V2',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}


// Define el componente 'Home' que se renderizará como la página principal de la aplicación.
export default async function Home() {

  
const featuredProducts = await productServices.getFeatured()
const latestProducts = await productServices.getLatest()
  // Retorna el JSX que representa la interfaz de usuario de la página principal.
  return (
    <>
    <div className="w-full carousel rounded-box mt-4">
      {featuredProducts.map((product, index) => (
        <div
          key={product._id}
          id={`slide-${index}`}
          className="carousel-item relative w-full"
        >
          <Link href={`/product/${product.slug}`}>
            <img
              src={product.banner}
              className="w-full"
              alt={product.name}
            />
          </Link>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide-${
                index === 0 ? featuredProducts.length - 1 : 0
              }`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a href="#slide-2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
    <h2 className="text-2xl py-2">Ultimos productos</h2>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {latestProducts.map((product) => (
        <ProductItem
          product={convertDocToObj(product)}
          key={product.slug}
        ></ProductItem>
      ))}
    </div>
    </>
  );
}
