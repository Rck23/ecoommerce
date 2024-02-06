// Importa el componente 'ProductItem' que se utiliza para mostrar cada producto individualmente.
import ProductItem from '@/components/products/ProductItem';
// Importa los datos de los productos desde un módulo de datos.
import { data } from '@/lib/data';

// Define el componente 'Home' que se renderizará como la página principal de la aplicación.
export default function Home() {
  // Retorna el JSX que representa la interfaz de usuario de la página principal.
  return (
    <>
      {/* Título de la sección de últimos productos */}
      <h2 className='text-2xl py-2'>Últimos productos</h2>

      {/* Grilla para organizar los productos en columnas */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {/* Mapea cada producto en los datos y crea un componente 'ProductItem' para cada uno */}
        {
          data.products.map(product => (
            <ProductItem key={product.slug} product={product} />
          ))
        }
      </div>
    </>
  );
}
