'use client'
import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Form = () => {
  const { data: session } = useSession()
  const params = useSearchParams()
  const router = useRouter()

  let callbackUrl = params.get('callbackUrl') || '/'
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl)
    }
  }, [callbackUrl, params, router, session])

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password } = form

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      if (res.ok) {
        return router.push(
          `/signin?callbackUrl=${callbackUrl}&success=Cuenta creada exitosamente!`
        )
      } else {
        const data = await res.json()
        throw new Error(data.message)
      }
    } catch (err: any) {

      const error = err.message && err.message.indexOf('E11000') === 0 ? 'Correo electrónico ya existe en una cuenta' : err.message
      toast.error(error || 'error')
    }
  }

  return (
    <div className="max-w-sm  mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Nueva cuenta</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label className="label" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'El nombre es requerido',
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.name?.message && (
              <div className="text-error">{errors.name.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="text"
              id="email"
              {...register('email', {
                required: 'El correo electrónico es requerido',
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Correo electrónico invalido',
                },
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.email?.message && (
              <div className="text-error"> {errors.email.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'La contraseña es requerida',
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-2">
            <label className="label" htmlFor="confirmPassword">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'La confirmación de contraseña es requerida',
                validate: (value) => {
                  const { password } = getValues()
                  return password === value || 'La contraseña no coincide!'
                },
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.confirmPassword?.message && (
              <div className="text-error">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Crear cuenta
            </button>
          </div>
        </form>

        <div className="divider"> </div>
        <div>
          {' '}
          Ya tienes cuenta? <Link
            className="link"
            href={`/signin?callbackUrl=${callbackUrl}`}
          >
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Form