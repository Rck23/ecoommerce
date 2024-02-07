// Importa el componente 'Header' que se utiliza para mostrar la cabecera de la aplicación.
import { Header } from "@/components/Header/header";
// Importa el archivo CSS global que aplica estilos a nivel de aplicación.
import "./globals.css";
// Importa el tipo 'Metadata' de Next.js para definir metadatos de la página.
import type { Metadata } from "next";
// Importa la fuente 'Inter' de Google Fonts con el subset 'latin'.
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

// Crea una instancia de la fuente 'Inter' con el subset 'latin'.
const inter = Inter({ subsets: ["latin"] });

// Define los metadatos de la página, como el título y la descripción.
export const metadata: Metadata = {
  title: "Ecommercito NextJs ",
  description: "Ecommerce prueba ",
};

// Define el componente 'RootLayout' que recibe 'children' como propiedades.
// 'children' es un término especial en React que se refiere a cualquier elemento hijo que se pase al componente.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>


          {/* Contenedor principal que incluye el encabezado, el contenido de la página y el pie de página. */}
          <div className="min-h-screen flex flex-col">
            {/* Componente 'Header' que se renderiza en la parte superior de la página. */}
            <Header />
            {/* Renderiza los hijos pasados al componente 'RootLayout'. */}
            {children}

            {/* Pie de página con información adicional. */}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-20">
              <p>Ecommercito todo chiquito todo panzón todo mini</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
