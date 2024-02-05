'use client'
import { OrderItem } from '@/lib/Models/OrderModel'
import useCartService from '@/lib/hooks/useCartStore'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [items])

  const addToCartHandler = () => {
    increase(item)
  }

  return existItem ? (
    <div>
      <button
        className="btn"
        type="button"
        onClick={() => decrease(existItem)}
      >
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button
        className="btn"
        type="button"
        onClick={() => increase(existItem)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className={'btn btn-primary w-full'}
      type="button"
      onClick={addToCartHandler}
    >
      Agregar al carrito
    </button>
  )
}