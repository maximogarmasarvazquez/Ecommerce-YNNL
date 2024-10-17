"use client"
import { useGetCategoryProduct } from '@/api/getCategoryProducts';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ResponseType } from '@/types/response';
import { Separator } from '@radix-ui/react-dropdown-menu';

import SkeletonSchema from '@/components/skeletonSchema';
import FiltersControlsCategory from './componentes/filters-controls-category';
import ProductCard from './componentes/product-card';
import { ProductType } from '@/types/product';

const Page = () => {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const router = useRouter();

  // Estados para los filtros de color y estilo
  const [filterColor, setFilterColor] = useState('');
  const [filterEstilo, setFilterEstilo] = useState('');

  // Lógica de filtrado actualizada
  const filteredProducts = result !== null && !loading && (
    result.filter((product: ProductType) => {
      const matchesColor = filterColor === '' || product.attributes.color === filterColor;
      const matchesEstilo = filterEstilo === '' || product.attributes.estilo === filterEstilo;
      return matchesColor && matchesEstilo;
    })
  );

  console.log(filteredProducts);

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {result !== null && !loading && (
        <h1 className='text-3xl font-medium'>
          {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />
      <div className='sm:flex sm:justify-between'>
        {/* Componente de filtros con color y estilo */}
        <FiltersControlsCategory setFilterColor={setFilterColor} setFilterEstilo={setFilterEstilo} />

        {/* Muestra los productos filtrados */}
        <div className='grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10'>
          {loading && <SkeletonSchema grid={3} />}

          {result !== null && !loading && (
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}

          {/* Mensaje cuando no hay productos con los filtros aplicados */}
          {filteredProducts.length === 0 && filteredProducts !== null && !loading && (
            <p>No hay productos con este filtro</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
