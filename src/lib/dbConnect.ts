// Importa la biblioteca 'mongoose' para interactuar con MongoDB.
import mongoose from 'mongoose';

// Define la función asíncrona 'dbConnect' que se encarga de conectar a la base de datos.
async function dbConnect() {
  try {
    // Intenta conectar a la base de datos utilizando la URL de conexión almacenada en las variables de entorno.
    // Se espera que la variable de entorno 'MONGODB_URL' contenga la cadena de conexión a la base de datos.
    await mongoose.connect(process.env.MONGODB_URL!);
  } catch (error) {
    // Si ocurre un error durante la conexión, se lanza un nuevo error con un mensaje descriptivo.
    throw new Error('Conexión a base de datos fallada!');
  }
}

// Exporta la función 'dbConnect' para que pueda ser utilizada en otras partes de la aplicación.
export default dbConnect;
