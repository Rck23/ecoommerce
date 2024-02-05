import AddToCart from '@/components/products/AddToCart'
import { data } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductDetails({params, }: {params: {slug: string}} ) {

    const product = data.products.find((x)=> x.slug === params.slug)

    if(!product){
        return <div>Producto no encontrado</div>
    }
  return (
    <>

    <div className='my-2'>
        <Link href='/'>
            Volver a los productos 
        </Link>
    </div>

    <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
            <Image 
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                sizes='100vw'
                style={{
                    width:'100%',
                    height: 'auto'

                }}
            />
        </div>

        <div>
            <ul className='space-y-4'>
                <li>
                    <h1 className='text-xl'>{product.name}</h1>
                </li>

                <li>
                    {product.rating} de {product.numReviews} opiniones
                </li>

                <li>
                    {product.brand}
                </li>

                <li className='divider'></li>

                <li>
                    Descripción: <p>{product.description}</p>
                </li>
            </ul>
        </div>
        
        <div>
            <div className='card bg-base-300 shadow-xl mt-3 md:mt-0'> 
            <div className='card-body'> 
                <div className='flex mb-2 justify-between'>
                    <div>Precio</div>
                    <div>${product.price}</div>
                </div>

                <div className='flex mb-2 justify-between'>
                    <div>Estatus</div>
                    <div>{product.countInStock > 0 ? 'Disponible': 'Agotado'}</div>
                </div>

               {
                product.countInStock !== 0 && (
                    <div className='card-actions justify-center'>
                        <AddToCart item={{ ...product, qty:0, color: '', size: ''}}/>
                    </div>
                )
               }
            </div>
            </div>
        </div>
    </div>

    </>
  )
}
