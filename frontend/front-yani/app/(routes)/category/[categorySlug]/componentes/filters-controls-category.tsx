import FilterColor from './filter-color';
import FilterEstilo from './filter-estilo';
import { useState } from 'react';

type FiltersControlsCategoryProps = {
  setFilterColor: (color: string) => void;
  setFilterEstilo: (estilo: string) => void;
};

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
  const { setFilterColor, setFilterEstilo } = props;

  // Estado para los filtros individuales
  const [filterColorOn, setFilterColorOn] = useState(false);
  const [filterEstiloOn, setFilterEstiloOn] = useState(false);

  const handleToggleColorFilter = () => {
    setFilterColorOn(!filterColorOn);
    setFilterColor('');
    
  };

  const handleToggleEstiloFilter = () => {
    setFilterEstiloOn(!filterEstiloOn);
    setFilterEstilo('');
    
  };

  return (
    <div className='sm:w-[350px] sm:mt-5 p-6'>
      {/* Botones para activar/desactivar filtros de color y estilo individualmente */}
      <div className="mb-4">
        <button
          className="mb-2 p-2 bg-slate-700 text-white rounded w-full"
          onClick={handleToggleColorFilter}
        >
          {filterColorOn ? 'Desactivar filtro de Color' : 'Activar filtro de Color'}
        </button>
        {filterColorOn && <FilterColor setFilterColor={setFilterColor} />}
      </div>

      <div>
        <button
          className="mb-2 p-2 bg-slate-700 text-white rounded w-full"
          onClick={handleToggleEstiloFilter}
        >
          {filterEstiloOn ? 'Desactivar filtro de Estilo' : 'Activar filtro de Estilo'}
        </button>
        {filterEstiloOn && <FilterEstilo setFilterEstilo={setFilterEstilo} />}
      </div>
    </div>
  );
};

export default FiltersControlsCategory;
