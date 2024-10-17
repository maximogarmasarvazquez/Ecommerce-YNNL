import { useGetProductField } from '@/api/getProductField'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem  } from "@/components/ui/radio-group"
import { FilterTypes } from '@/types/filters'
import React from 'react'



type FiltersColorProps = {
  setFilterColor: (color: string) => void;
}

const FilterColor = (props : FiltersColorProps) => {
  const { setFilterColor } = props;
  const { result, loading }: FilterTypes = useGetProductField();

  return (
    <div className='my-5'>
        <p className='mb-3 font-bold'>Color</p>
        { loading && result === null && (
          <p>Cargando color... </p>
          )}
      
          <RadioGroup onValueChange={(value) => setFilterColor(value)}>
            {result !== null && result.schema.attributes.color.enum.map((color: string) => (
              <div key={color} className='flex items-center space-x-2'>
                <RadioGroupItem value={color} id={color}/>
                  <Label htmlFor={color}> {color} </Label>
              </div>
            ))} 
             </RadioGroup>
          
    </div>
  );
}

export default FilterColor