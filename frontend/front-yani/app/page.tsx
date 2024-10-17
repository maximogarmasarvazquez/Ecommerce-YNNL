import CarouselTextBanner from '@/components/carousel-text-banner';
import FeaturedProduts from '@/components/featured-products';
import BannerDiscount from '@/components/banner-discount';
import ChooseCategory from '@/components/choose-category';
import BannerProduct from '@/components/banner-product';


export default function Home() {
  return (
    <main>
      <CarouselTextBanner/>
      <FeaturedProduts/>
      <BannerDiscount/>
      <ChooseCategory/>
      <BannerProduct/>
    </main>
  );  
}
