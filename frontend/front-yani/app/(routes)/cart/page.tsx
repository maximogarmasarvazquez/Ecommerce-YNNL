"use client";

import { useCart } from '@/hooks/use-cart'
import { Separator } from '@/components/ui/separator';
import React from 'react'
import { formatPrice } from '@/lib/formatPrice';
import { Button } from '@/components/ui/button';
import CartItem from './componentes/cart-item';



export default function Page () {
  const { items, removeAll } = useCart()
  const price = items.map((product => product.attributes.price))
 const totalPrice = price.reduce((total,price) => total + price, 0)
 
  return (
    <div className='max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <h1 className='mb-5 text-3xl fondt-bold'>Carrito de compras</h1>
      <div className='grid sm:grid-cols-2 sm:gap-5'>
      <div>
        {items.length === 0 && (
          <p>no hay productos en el carrito</p>
        )}
        <ul>
          {items.map((item) => (    
            <CartItem key={item.id} product={item} />
                ))}
        </ul>
      </div>
      <div className='max-w-xl'>
          <div className='p-6 rounded-lg bg-slate-100'>
            <p className='mb-3  text-lg font-semibold '>Suma de sus productos</p>
            <Separator/>
            <div className='flex justify-between gap-5 my-4'>
              <p>Orden total</p> 
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className='flex items-center justify-center w-full mt-3'>
              <Button className='w-full' onClick={() => console.log("a")}>Comprar</Button>
            </div>
          </div>
      </div>
      </div>
     </div>
    )
}

