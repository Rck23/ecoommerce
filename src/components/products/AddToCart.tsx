// Directiva 'use client' que indica que el siguiente bloque de código se ejecutará solo en el lado del cliente.
'use client';
// Importa el tipo 'OrderItem' del modelo de pedidos para tipar el objeto 'item' que se pasa como propiedad.
import { OrderItem } from '@/lib/Models/OrderModel';
// Importa el hook personalizado 'useCartService' que maneja la lógica del carrito de compras.
import useCartService from '@/lib/hooks/useCartStore';
// Importa los hooks 'useEffect' y 'useState' de React para manejar efectos secundarios y estado local.
import { useEffect, useState } from 'react';

// Define el componente 'AddToCart' que recibe un objeto 'item' de tipo 'OrderItem' como propiedad.
export default function AddToCart({ item }: { item: OrderItem }) {
  // Utiliza el hook 'useCartService' para obtener los elementos del carrito y las funciones para modificar la cantidad de los elementos.
  const { items, increase, decrease } = useCartService();
  // Estado local para almacenar el artículo existente en el carrito, si existe.
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  // Efecto que se ejecuta cuando cambia la lista de elementos en el carrito.
  useEffect(() => {
    // Busca el artículo en el carrito por su slug y actualiza el estado 'existItem'.
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [items]); // Dependencia del efecto: la lista de 'items' en el carrito.

  // Función que maneja el evento de click para agregar el artículo al carrito.
  const addToCartHandler = () => {
    increase(item); // Llama a la función 'increase' para agregar el artículo al carrito.
  };

  // Retorna el JSX que representa el botón para agregar al carrito o los controles para actualizar la cantidad.
  return existItem ? (
    // Si el artículo ya existe en el carrito, muestra los botones para disminuir y aumentar la cantidad.
    <div>
      <button
        className="btn"
        type="button"
        onClick={() => decrease(existItem)} // Llama a la función 'decrease' para disminuir la cantidad.
      >
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button
        className="btn"
        type="button"
        onClick={() => increase(existItem)} // Llama a la función 'increase' para aumentar la cantidad.
      >
        +
      </button>
    </div>
  ) : (
    // Si el artículo no existe en el carrito, muestra el botón para agregarlo.
    <button
      className={'btn btn-primary w-full'}
      type="button"
      onClick={addToCartHandler} // Llama a la función 'addToCartHandler' para agregar el artículo al carrito.
    >
      Agregar al carrito
    </button>
  );
}