// Importa el modelo 'ProductModel' que se utiliza para interactuar con la colección de productos en la base de datos.
import ProductModel from '@/lib/Models/ProductModel';
// Importa el modelo 'UserModel' que se utiliza para interactuar con la colección de usuarios en la base de datos.
import UserModel from '@/lib/Models/UserModel';
// Importa los datos de los productos y usuarios desde un módulo de datos.
import { data } from '@/lib/data';
// Importa la función 'dbConnect' que se utiliza para conectar a la base de datos.
import dbConnect from '@/lib/dbConnect';
// Importa los tipos 'NextRequest' y 'NextResponse' de 'next/server' para trabajar con solicitudes y respuestas HTTP en el servidor de Next.js.
import { NextRequest, NextResponse } from 'next/server';

// Define la función 'GET' que se ejecuta cuando se realiza una solicitud GET al endpoint correspondiente.
export const GET = async (request: NextRequest) => {
  // Desestructura los datos de usuarios y productos del objeto 'data'.
  const { users, products } = data;
  // Conecta a la base de datos utilizando la función 'dbConnect'.
  await dbConnect();
  // Borra todos los documentos de la colección de usuarios.
  await UserModel.deleteMany();
  // Inserta los datos de usuarios en la colección de usuarios.
  await UserModel.insertMany(users);
  // Borra todos los documentos de la colección de productos.
  await ProductModel.deleteMany();
  // Inserta los datos de productos en la colección de productos.
  await ProductModel.insertMany(products);
  // Retorna una respuesta JSON con un mensaje de éxito y los datos de usuarios e productos insertados.
  return NextResponse.json({
    message: 'seed ejecutado correctamente',
    users,
    products,
  });
}
