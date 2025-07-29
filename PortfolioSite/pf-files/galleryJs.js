document.querySelectorAll('.project-section').forEach(section => {
  const scroller = section.querySelector('.image-scroll');
  const leftBtn = section.querySelector('.left');
  const rightBtn = section.querySelector('.right');
  const images = scroller.querySelectorAll('img');
  const scrollGap = 16; 

  function scrollByImage(direction) {
    if (images.length === 0) return;
    const imageWidth = images[0].clientWidth;
    const scrollAmount = imageWidth + scrollGap;

    scroller.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  leftBtn.addEventListener('click', () => scrollByImage('left'));
  rightBtn.addEventListener('click', () => scrollByImage('right'));

  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';
    });
  });
});


const modal = document.getElementById('imageModal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});