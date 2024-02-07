// Directiva 'use client' que indica que el siguiente bloque de código se ejecutará solo en el lado del cliente.
"use client";
// Importa el hook personalizado 'useCartService' que maneja la lógica del carrito de compras.
import useCartService from "@/lib/hooks/useCartStore";
import { signIn, signOut, useSession } from "next-auth/react";
// Importa el componente 'Link' de Next.js para la navegación entre páginas sin recargar la página.
import Link from "next/link";
// Importa React y sus hooks 'useEffect' y 'useState' para manejar efectos secundarios y estado local.
import React, { useEffect, useState } from "react";

// Define el componente 'Menu' que se renderizará como el menú de navegación de la aplicación.
const Menu = () => {
  const { init } = useCartService();
  const { data: session } = useSession();
  const signoutHandler = () => {
    signOut({ callbackUrl: "/signin" });
    init();
  };
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
      {session && session.user ? (
        <>
          <li>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                {session.user.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 "
              >
                <li>
                  <button type="button" onClick={signoutHandler}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </>
      ) : (
        <li>
          <button
            className="btn btn-ghost rounded-btn"
            type="button"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </li>
      )}
    </>
  );
};

export default Menu;
