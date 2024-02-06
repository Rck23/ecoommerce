// Define el componente 'FrontLayout' que recibe 'children' como propiedades.
// 'children' es un término especial en React que se refiere a cualquier elemento hijo que se pase al componente.
export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // Retorna un elemento 'main' que actúa como contenedor principal para los hijos del componente.
  // Las clases CSS aplicadas al elemento 'main' son para darle estilo y posicionamiento.
  // 'flex-grow' hace que el contenido crezca para ocupar todo el espacio disponible.
  // 'container' es probablemente una clase de un framework CSS como Bootstrap o Tailwind.
  // 'mx-auto' centra horizontalmente el contenedor.
  // 'px-4' añade padding horizontal al contenedor.
  return <main className="flex-grow container mx-auto px-4">{children}</main>
}
