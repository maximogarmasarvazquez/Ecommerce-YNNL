// Definir la función global para convertir colores a inglés
 const getsColor = (color: string): string => {
    switch (color.toLowerCase()) {
        case 'rojo':
            return 'red';
        case 'rosa':
            return 'pink';
        case 'azul':
            return 'blue';
        case 'negro':
            return 'black';
        case 'blanco':
             return 'gray';
        // Añade más colores si es necesario
        default:
            return 'gray'; // Color por defecto
    }
};

// Función para obtener la clase de color para Tailwind
export const getColorClass = (color: string) => {
    const englishColor = getsColor(color);

    switch (englishColor) {
        case 'red':
            return 'bg-red-600';
        case 'pink':
            return 'bg-pink-600';
        case 'blue':
            return 'bg-blue-600';
        case 'black':
            return 'bg-black';
        case 'white':
            return 'bg-gray-600';
        // Añade más colores si es necesario
        default:
            return 'bg-gray-600'; // Color por defecto
            
    }
};
