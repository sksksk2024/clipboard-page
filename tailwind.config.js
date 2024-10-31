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
      'strong-cyan': 'hsl(171, 66%, 44%)',
      'light-blue': 'hsl(233, 100%, 69%)',
      'dark-grayish-blue': 'hsl(210, 10%, 33%)',
      'grayish-blue': 'hsl(201, 11%, 66%)',
      'gray': 'var(--light-gray)',
    },
    maxWidth: {   
      'container-3xs': '200px',     
      'container-2xs': '250px',     
      'container-xs': '500px',
      'container-sm': '900px',     
      'container-md': '1100px',     
      'container-lg': '1200px',     
      'container-xl': '1500px',     
      'custom': '90%',
    },
    width: {
      '1.6W': '0.1rem',
      '16W': '1rem',
      '28.8W': '1.8rem',
      '32W': '2rem',
      '64W': '4rem',
      '256W': '16rem',
      '272W': '17rem',
      '288W': '18rem',
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
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
    },
    margin: {
      '1.6M': '0.1rem',
      '16M': '1rem',
      '28.8M': '1.8rem',
      '32M': '2rem',
      '1.2M': '1.2rem',
      '48M': '3rem',
      '64M': '4rem',
      '128M': '8rem',
    },
    borderWidth: {
      '1BW': '1px',
    },
    inset: {
      '16negI': '-1rem',
      '1.6I': '0.1rem',
      '16I': '1rem',
      '28.8I': '1.8rem',
      '32I': '2rem',
      '48I': '3rem',
      '64I': '4rem',
      '80I': '5rem',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
    },
    padding: {
      '1.6P': '0.1rem',
      '8P': '0.5rem',
      '10P': '0.625rem',
      '16P': '1rem',
      '24P': '1.5rem',
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
      '30BR': '30px',
      '50BR': '50px',
    },
    boxShadow: {
      'custom-light': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      'custom-medium': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
      'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
      'custom-xl': '0 20px 25px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      'custom-dark-cyan': '0 3px 1px rgba(0, 100, 0, 0.9), 0 4px 6px rgba(38, 186, 164, 0.9)',
      'custom-dark-light-blue': '0 3px 1px rgba(80, 70, 100, 0.9), 0 4px 6px rgba(97, 115, 255, 0.9)',
    },
    userSelect: {
      'none': 'none',
    },
  },
},
  plugins: [],
};
