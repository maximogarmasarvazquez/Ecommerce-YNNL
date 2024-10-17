"use client";
import { useRouter } from 'next/navigation';
import { Carousel, CarouselItem,CarouselContent} from '../components/ui/carousel';
import { Card, CardContent } from './ui/card';
import  Autoplay  from 'embla-carousel-autoplay';
export const dataCarouselTop = [
    {
        id: 1,
        title: 'Envios en 24 hs',
        description: 'sit amet, consectetur adipiscing elit',
        link: '#'
    },
    {
        id: 2,
        title: 'Envios en 24 hs',
        description: 'sit amet, consectetur adipiscing elit',
        link: '#'
    },
    {
        id: 3,
        title: 'Envios en 24 hs',
        description: 'sit amet, consectetur adipiscing elit',
        link: '#'
    },
    {
        id: 4,
        title: 'Envios en 24 hs',
        description: 'sit amet, consectetur adipiscing elit',
        link: '#'
    }
]

const CarouselTextBanner = () => {
    const router = useRouter();
    return(
        <div className='bg-gray-200 dark:bg-primary'>
             <Carousel className='w-full max-w-4xl mx-auto'
             plugins={[
                Autoplay({
                    delay:3000
                }),
             ]}>
                <CarouselContent>
              {dataCarouselTop.map(({ id, title, link, description }) => (
                 <CarouselItem key={id} onClick={ () => router.push(link)} className="cursor-pointer">
                    <div>
                       <Card className='shadow-none border-none bg-transparent'>
                         <CardContent className='flex flex-col justify-center p-2 items-center text-center'>
                            <p className='sm:text-lg text-wrap dark:text-secondary'>{title}</p>
                            <p className='text-xs sm:text-sm text-wrap dark:text-secondary'>{description}</p>
                         </CardContent>
                       </Card>
                    </div>
                </CarouselItem>
              ))}
              </CarouselContent>
             </Carousel>
        </div>
    )}
export default CarouselTextBanner;