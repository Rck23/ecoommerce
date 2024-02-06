"use client"

// Importa el hook personalizado 'useCartService' que maneja la lógica del carrito de compras.
import useCartService from "@/lib/hooks/useCartStore";
// Importa el componente 'Image' de Next.js para optimizar la carga de imágenes.
import Image from "next/image";
// Importa el componente 'Link' de Next.js para la navegación entre páginas sin recargar la página.
import Link from "next/link";
// Importa el hook 'useRouter' de Next.js para acceder a la instancia del router.
import { useRouter } from "next/navigation"; // Corregido: 'next/router' en lugar de 'next/navigation'.
// Importa los hooks 'useEffect' y 'useState' de React para manejar efectos secundarios y estado local.
import { useEffect, useState } from "react";

// Define el componente principal 'CartDetails' que se renderizará como la página de detalles del carrito.
export default function CartDetails() {
  // Obtiene la instancia del router para navegar entre páginas.
  const router = useRouter();

  // Utiliza el hook 'useCartService' para obtener los elementos del carrito, el precio total, y funciones para modificar la cantidad de los elementos.
  const { items, itemsPrice, decrease, increase } = useCartService();

  // Estado local para controlar si el componente ha sido montado o no.
  const [mounted, setMounted] = useState(false);

  // Efecto que se ejecuta una vez después de que el componente se haya montado.
  useEffect(() => {
    setMounted(true); // Establece 'mounted' en true para indicar que el componente está listo.
  }, []); // El array vacío indica que este efecto solo debe ejecutarse una vez.

  // Si el componente aún no está montado, retorna un fragmento vacío.
  if (!mounted) return <></>;

  // Retorna el JSX que representa la interfaz de usuario del carrito de compras.
  return (
    <>
      {/* Título de la página */}
      <h1 className="py-4 text-2xl">Carrito de compra</h1>

      {/* Condicional para mostrar mensaje si no hay productos en el carrito o la lista de productos */}
      {items.length ===  0 ? (
        <div>
          No hay productos en el carrito.{" "}
          {/* Enlace para ir a la página de productos */}
          <Link href="/" className="underline">ir a comprar productos</Link>
        </div>
      ) : (
        // Si hay productos, muestra la tabla con los detalles del carrito.
        <div className="grid md:grid-cols-4 md:gap-5">
          {/* Tabla de productos */}
          <div className="overflow-x-auto md:col-span-3">
            <table className="table">
              {/* Encabezados de la tabla */}
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>

              {/* Filas de productos */}
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    {/* Información del producto */}
                    <td>
                      {/* Enlace al producto */}
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        {/* Imagen del producto */}
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        {/* Nombre del producto */}
                        <span className="px-2">
                          {item.name}
                        </span>
                      </Link>
                    </td>

                    {/* Cantidad y botones para aumentar/disminuir */}
                    <td>
                      <button className="btn" type="button" onClick={() => decrease(item)}>-</button>
                      <span className="px-2">{item.qty}</span>
                      <button className="btn" type="button" onClick={() => increase(item)}>+</button>
                    </td>
                    {/* Precio del producto */}
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Resumen del carrito */}
          <div>
            <div className="card bg-base-300">
              <div className="card-body">
                {/* Lista de resúmenes */}
                <ul>
                  <li>
                    {/* Subtotal */}
                    <div className="pb-3 text-xl">
                      Subtotal ({items.reduce((a, c) => a + c.qty,  0)}) : $ {itemsPrice}
                    </div>
                  </li>

                  {/* Botón para proceder al pago */}
                  <li>
                    <button className="btn btn-primary w-full" onClick={() => router.push('/shipping')}>
                      Proceder al pago
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
