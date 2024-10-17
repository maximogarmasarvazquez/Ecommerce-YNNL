/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious,CarouselNext } from '@/components/ui/carousel';
import React from 'react'

interface CarouselProductProps {
    images: {
        data:{
            id: number;
            attributes:{
                url:string;
            }
        }[]
    }
}
const CarouselProduct = (props : CarouselProductProps) => {
 const { images } = props;
console.log(images);
    return (
        <div className='sm: px-16'>
            <Carousel>
                <CarouselContent>
                    {images.data.map((image) => (
                        <CarouselItem key={image.id}>
                            <img
                             src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} 
                             alt='product' 
                             className='rounded-lg' 
                             />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        )
}

export default CarouselProduct