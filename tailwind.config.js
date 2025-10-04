// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Si tus componentes están en 'src'
    "./componentes/**/*.{js,ts,jsx,tsx}", // Si tus componentes están en 'componentes' directamente en la raíz
  ],
  theme: {
    extend: {
      colors: {
        'dark-background': '#1A1A2E',
        'dark-primary': '#0F0F1B', // ¡Esta es la clave!
        'dark-secondary': '#2E2E4A',
        'light-text': '#E0E0E0',
        'accent-blue': '#00ADB5',
        'accent-purple': '#8A2BE2',
        'dark-subtle': '#4A4A6A',
        // Si quieres usar 'bermuda' con Tailwind, también deberías definirlo aquí:
        'color-bermuda': '#78dcca',
        // Otros colores que tenías en tu :root
        'color-tech-dark': '#0a0f1c',
        'color-night': '#0d1117',
        'color-gunmetal': '#1f2937',
        'color-greendark': '#000F12',
        'color-onyx': '#161b22',
        'color-carbon': '#0a0f1c',
        'color-midnight': '#121063',
        'color-tahiti': '#3ab7bf',
        'primary-color': '#4a90e2',
        'secondary-color': '#50e3c2',
        'background-color': '#f5f5f5',
        'text-color': '#333333',
        'custom-gray': '#D6D6D6',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}