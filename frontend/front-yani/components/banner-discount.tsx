import React from 'react'
import { buttonVariants } from './ui/button';
import Link from 'next/link';
const BannerDiscount = () => {
  return (
    <div className='p-5 sm:p-20 text-center '>
        <h2 className='uppercase font-black text-2xl text-primary'>Consigue hasta un -15%</h2>
        <h3 className='mt-3 font-semibold'>-15% llevando 2 prendas y 1 accesorio </h3>
     
     <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5'>
        <Link href='#' className={buttonVariants()}>Comprar</Link>
        <Link href='#' className={buttonVariants({variant: "outline"})}>Ver más</Link>
     </div>
    </div>
  )
}

export default BannerDiscount;