import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export const Header = () => {
  return (
    <header>
        <nav> 
            <div className='navbar justify-between bg-base-300'>

                <Link href='/' className='btn btn-ghost text-lg'>Ecommercito</Link>

               <Menu/>
            </div>
        </nav>
    </header>
  )
}
