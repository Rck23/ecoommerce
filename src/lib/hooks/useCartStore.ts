// Importa la función 'create' de Zustand para crear un nuevo store.
import { create } from "zustand";
// Importa el middleware 'persist' de Zustand para persistir el estado en el almacenamiento local del navegador.
import { persist } from "zustand/middleware";
// Importa la función 'round2' de un módulo de utilidades para redondear números a dos decimales.
import { round2 } from "../utils";
// Importa el tipo 'OrderItem' del modelo de pedidos para tipar los objetos de los artículos en el carrito.
import { OrderItem } from "../Models/OrderModel";

// Define el tipo 'Cart' que describe la estructura del estado del carrito.
type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

// Define el estado inicial del carrito.
const initialState: Cart = {
  items: [],
  itemsPrice:  0,
  taxPrice:  0,
  shippingPrice:  0,
  totalPrice:  0,
};

// Crea el store de Zustand con el estado inicial y persiste el estado en el almacenamiento local.
export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "cartStore",
  })
);

// Define el hook personalizado 'useCartService' que expone las funciones para manipular el carrito.
export default function useCartService() {
    // Obtiene el estado actual del carrito del store.
  const { items, itemsPrice, taxPrice, shippingPrice, totalPrice } =
    cartStore();

      // Devuelve las funciones y valores del estado del carrito.
  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,

        // Función para aumentar la cantidad de un artículo en el carrito.
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCartItems);
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },

        // Función para disminuir la cantidad de un artículo en el carrito.
    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      if (!exist) return;
      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x: OrderItem) => x.slug !== item.slug)
          : items.map((x) =>
              item.slug ? { ...exist, qty: exist.qty - 1 } : x
            );

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCartItems);
            // Función para reinicializar el carrito a su estado inicial.
      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },

    init: () => cartStore.setState(initialState),
  };
}

// Función auxiliar para calcular los precios del carrito.
const calcPrice = (items: OrderItem[]) => {

   // Calcula el precio total de los artículos, el precio de envío, el impuesto y el precio total.
  // Redondea los resultados a dos decimales utilizando la función 'round2'.
  const itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
    taxPrice = round2(Number(0.15 * itemsPrice)),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

