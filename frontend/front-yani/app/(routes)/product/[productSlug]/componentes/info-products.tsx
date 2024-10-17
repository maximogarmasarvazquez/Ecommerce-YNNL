import { ProductType } from '@/types/product'
import React from 'react'
import { getColorClass } from '@/funciones/getColor'
import { Separator } from '@radix-ui/react-dropdown-menu';
import { format } from 'path';
import { formatPrice } from '@/lib/formatPrice';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
export type InfoProductProps = {
    product: ProductType;
}


export const InfoProduct = (props: InfoProductProps) => {
    const { product } = props;
    const { addItem } = useCart();
    console.log(getColorClass(product.attributes.color))

    
    return (
        <div className='px-6'>
            <div className='justify-between mb-3 sm:flex'>
                <h1 className='text-2xl'>{product.attributes.productName}</h1>
                <div className='flex items-center justify-between gap-3'>
                    <p
                    
                        className={`px-2 py-1 text-xs text-white ${getColorClass(product.attributes.color)} rounded-full dark:bg-white dark:text-black w-fit `}  
                        >
                        {product.attributes.color}
                    </p>
                    <p
                        className='px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit'
                    >
                        {product.attributes.estilo}
                    </p>
                </div>
            </div>
             <Separator className='my-4'/>
            <p>{product.attributes.description}</p>
             <Separator className='my-4'/>
            <p className='my-4 text-2xl'>{formatPrice(product.attributes.price)}</p>
            <div className='flex items-center gap-5'>
                <Button className='w-full' 
                 onClick={() => addItem(product)}>
                 Comprar
                </Button>
                <Heart width={30} strokeWidth={1} 
                 className='transition duration-300 cursor-pointer hover:fill-black' 
                 onClick={() => console.log("add")}/>
            </div>
        </div>
    );
};

export default InfoProduct;