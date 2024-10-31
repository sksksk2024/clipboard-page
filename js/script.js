document.addEventListener('DOMContentLoaded', () => {
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  
  const toggleImages = (() => {
    const width = window.innerWidth;
    
    if (width <= 400) {
      img1.classList.add('hidden');
      img2.classList.remove('hidden');
    } else {
      img1.classList.remove('hidden');
      img2.classList.add('hidden');
    }
  });


  toggleImages();

  window.addEventListener('resize', toggleImages);

});