import mongoose from "mongoose"

export type User = {
  _id: string
  name: string
  email: string
  isAdmin: boolean
}

const UserSchema = new mongoose.Schema(
  {
    // El nombre completo del usuario.
    name: {
      type: String,
      required: true,
    },
    // La dirección de correo electrónico del usuario, que debe ser única.
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // La contraseña del usuario, que se almacena como una cadena de texto.
    password: {
      type: String,
      required: true,
    },
    // Un indicador booleano que determina si el usuario tiene privilegios de administrador.
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    // Indica que Mongoose debe administrar automáticamente las propiedades `createdAt` y `updatedAt`.
    timestamps: true,
  }
);


// Intenta obtener el modelo 'User' si ya ha sido definido anteriormente.
// Si no existe, crea un nuevo modelo con el nombre 'User' utilizando el esquema 'UserSchema'.
const UserModel = mongoose.models?.User || mongoose.model('User', UserSchema)

// Exporta el modelo 'UserModel' para que pueda ser utilizado en otras partes de la aplicación.
export default UserModel;
