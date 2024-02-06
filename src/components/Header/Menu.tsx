// Directiva 'use client' que indica que el siguiente bloque de código se ejecutará solo en el lado del cliente.
'use client';
// Importa el hook personalizado 'useCartService' que maneja la lógica del carrito de compras.
import useCartService from '@/lib/hooks/useCartStore';
// Importa el componente 'Link' de Next.js para la navegación entre páginas sin recargar la página.
import Link from 'next/link';
// Importa React y sus hooks 'useEffect' y 'useState' para manejar efectos secundarios y estado local.
import React, { useEffect, useState } from 'react';

// Define el componente 'Menu' que se renderizará como el menú de navegación de la aplicación.
const Menu = () => {
  // Utiliza el hook 'useCartService' para obtener los elementos del carrito.
  const { items } = useCartService();
  // Estado local para controlar si el componente ha sido montado o no.
  const [mounted, setMounted] = useState(false);
  // Efecto que se ejecuta una vez después de que el componente se haya montado.
  useEffect(() => {
    setMounted(true); // Establece 'mounted' en true para indicar que el componente está listo.
  }, []); // El array vacío indica que este efecto solo debe ejecutarse una vez.

  // Retorna el JSX que representa la estructura del menú de navegación.
  return (
    <>
       <div>
        {/* Lista desordenada que actúa como contenedor para los elementos del menú. */}
        <ul className="flex items-stretch">
          <li>
            {/* Enlace al carrito de compras. */}
            <Link className="btn btn-ghost rounded-btn" href="/cart">
              Carrito
              {/* Badge que muestra la cantidad total de artículos en el carrito si hay alguno. */}
              {mounted && items.length !=  0 && (
                <div className="badge badge-accent">
                  {items.reduce((a, c) => a + c.qty,  0)}{' '}
                </div>
              )}
            </Link>
          </li>
          <li>
            {/* Botón para iniciar sesión. */}
            <button className="btn btn-ghost rounded-btn" type="button">
              Iniciar Sesión
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu