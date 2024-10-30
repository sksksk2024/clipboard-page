// tailwind.config.js
module.exports = {
  content: [
    "./*.html",  
    "./css/**/*.css", 
    "./js/**/*/.js",
],
theme: {
  extend: {
    colors: {
      'red': 'hsl(0, 100%, 74%)',
      'green': 'hsl(154, 59%, 51%)',
      'blue': 'hsl(248, 70%, 56%)',
      'dark-blue': 'hsl(249, 10%, 26%)',
      'grayish-blue': 'hsl(246, 25%, 77%)',
    },
    width: {
      '1.6W': '0.1rem',
      '16W': '1rem',
      '28.8W': '1.8rem',
      '32W': '2rem',
      '64W': '4rem',
      '272W': '17rem',
    },
    height: {
      '48H': '3rem', 
    },
    screens: {
      '3xs': '0px',
      '2xs': '380px',
      'xs': '480px', // extra small screens
      'sm': '640px', // small screens
      'md': '768px', // medium screens
      'lg': '1024px', // large screens
      'xl': '1280px', // extra large screens
      '2xl': '1536px', // double extra large screens
    },
    fontSize: {
      '2xs': 'var(--font-size-2xs)',
      'xs': 'var(--font-size-xs)',
      'sm': 'var(--font-size-sm)',
      'md': 'var(--font-size-md)',
      'lg': 'var(--font-size-lg)',
      'xl': 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
    },
    margin: {
      '1.6M': '0.1rem',
      '16M': '1rem',
      '28.8M': '1.8rem',
      '32M': '2rem',
      '64M': '4rem',
      '1.2M': '1.2rem',
      '48M': '3rem',
    },
    borderWidth: {
      '1BW': '1px',
    },
    inset: {
      '16negP': '-1rem',
      '1.6P': '0.1rem',
      '16P': '1rem',
      '28.8P': '1.8rem',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
    },
    padding: {
      '1.6P': '0.1rem',
      '10P': '0.625rem',
      '16P': '1rem',
      '28.8P': '1.8rem',
      '32P': '2rem',
      '64P': '4rem',
      '1.2P': '1.2rem',
      '48P': '3rem',
      '28P': '1.75rem',
    },
    borderRadius: {
      '5BR': '5px',
      '10BR': '10px',
      '20BR': '20px',
      '50BR': '50px',
    },
    // Transition from pixel values to rem values, but let their variables name the same
  },
},
  plugins: [],
};
