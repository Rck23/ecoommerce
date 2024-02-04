import { Header } from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommercito NextJs ",
  description: "Ecommerce prueba ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}

          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Ecommercito chiquito todo panzón todo mini</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
