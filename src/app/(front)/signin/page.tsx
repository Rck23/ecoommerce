import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
}

export default async function Signin() {
  return <Form />
}