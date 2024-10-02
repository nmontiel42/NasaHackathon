/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Ajusta esto si usas otros tipos de archivos
];

export const theme = {
  extend: {
    colors: {
      customColor1: '#cbe58e',
      customColor2: '#013026', 
      customColor3: '#107e57',
      customColor4: '#a1ce3f',
      customColor5: '#014760'
    },
  },
};

export const plugins = [];