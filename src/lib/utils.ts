// Define la función 'round2' que toma un número como argumento.
export const round2 = (num: number) => {
    // Realiza el redondeo multiplicando el número por  100, redondeando al entero más cercano,
    // y luego dividiendo por  100 para obtener el resultado original pero con dos decimales.
    // El uso de 'Number.EPSILON' garantiza que el redondeo sea correcto incluso para números muy pequeños.
    return Math.round((num + Number.EPSILON) *  100) /  100;
  };
  