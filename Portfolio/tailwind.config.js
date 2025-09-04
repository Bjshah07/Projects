/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(200px,1fr))'
      },
      animation: {
        spin_speed: 'spin 6s linear infinite',
        ping_speed: 'ping 2s linear infinite'
      },
      colors: {
        lighthover: '#fcf4ff',
        darkhover: '#2a004a',
        darkTheme: '#11001f'
      },
      boxShadow: {
        'white': '4px 4px 0 #fff',
        'black': '4px 4px 0 #000',
      }
    },

  },
  darkMode: 'selector'
}

