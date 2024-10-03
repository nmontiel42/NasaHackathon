/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Ajusta esto si usas otros tipos de archivos
];

export const theme = {
  extend: {
    backgroundImage: {
      'space': "url('public/5a382399ba548cccde42b698be37a4c0.jpg')"
    },
    colors: {

      /* Verdes */

      green1: '#cbe58e',
      green2: '#013026', 
      green3: '#107e57',
      green4: '#a1ce3f',
      green5: '#1d8348',
      green6: '#52be80',
      green7: '#82e0aa',
      green8: '#a9dfbf',

      /* Azules */

      blue1: '#014760',
      blue2: '#1a3a5f',
      blue3: '#1b4f72',
      blue4: '#5dade2',
      blue5: '#85c1e9',

      /* Morados */

      purple1: '#9B30FF',
      purple2: '#6A0DAD',
      purple3: '#5D3FD3',
      purple4: '#4B0082',
      purple5: '#8A2BE2',
      purple6: '#301934'
    },

    boxShadow: {
      customColor3: '0 0 5px customColor3, 0 0 25px customColor3',
      customHover: '0 0 5px customColor3, 0 0 25px customColor3, 0 0 50px customColor3, 0 0 100px customColor3, 0 0 200px customColor3',
    },

    textShadow: {
      custom: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.5)'
    }
  },
};

export const plugins = [
  require('tailwindcss-textshadow'),
];