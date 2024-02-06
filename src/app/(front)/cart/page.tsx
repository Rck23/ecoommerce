// Importa el componente 'CartDetails' que contiene la lógica y la interfaz de usuario del carrito de compras.
import CartDetails from "./CartDetails";

// Exporta un objeto 'metadata' que contiene información sobre la página, como el título que se mostrará en el navegador o en la barra de título.
export const metadata = {
    title: 'Carrito de compras'
};

// Define el componente 'CartPage' que será la página principal del carrito de compras.
const CartPage = () => {
  // Retorna el componente 'CartDetails' que se encargará de mostrar los detalles del carrito.
  return <CartDetails/>;
}

// Exporta 'CartPage' como el export por defecto de este módulo, lo que significa que será el componente que se renderice cuando se acceda a esta ruta.
export default CartPage;
