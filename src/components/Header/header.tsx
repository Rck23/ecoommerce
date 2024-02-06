// Importa el componente 'Link' de Next.js para la navegación entre páginas sin recargar la página.
import Link from 'next/link';
// Importa React, aunque no se utiliza directamente en este archivo, ya que Next.js lo importa automáticamente.
import React from 'react';
// Importa el componente 'Menu' que se utiliza para mostrar el menú desplegable.
import Menu from './Menu';

// Define el componente 'Header' que se renderizará como la cabecera de la aplicación.
export const Header = () => {
  // Retorna el JSX que representa la estructura de la cabecera.
  return (
    <header>
      {/* Elemento 'nav' que contiene la navegación principal de la aplicación. */}
      <nav>  
        {/* Div que actúa como contenedor para la barra de navegación. */}
        <div className='navbar justify-between bg-base-300'>
          {/* Enlace a la página principal de la aplicación. */}
          <Link href='/' className='btn btn-ghost text-lg'>Ecommercito</Link>
          {/* Componente 'Menu' que se renderiza para mostrar el menú desplegable. */}
          <Menu/>
        </div>
      </nav>
    </header>
  );
}
