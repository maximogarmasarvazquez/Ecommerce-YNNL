import React from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
const BannerProduct = () => {
  return (
 <>
   <div className='mt-4 text-center'>
    <p>Elige tu estilo unico</p>
    <h4 className='mt-2 text-5xl font-extrabold upperce'>
     DiseñosExclusivos
    </h4>
    <p className='my-2 text-lg'>
    Explora nuestra colección. Refleja tu personalidad y estilo.
    </p>
    <Link href="#" className={buttonVariants()}>Comprar
    </Link>
   </div>
   <div className="h-[250px] bg-cover md:h-[600px] shadow-2xl bg-[url('../img/tenis1.jpg')] bg-center mt-5">
   </div>
 </>
  )
}

export default BannerProduct