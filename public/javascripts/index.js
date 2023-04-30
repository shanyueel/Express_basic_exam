const homePageButton = document.querySelector('.homepage-btn');
const aboutButton = document.querySelector('.about-btn');
const portfolioButton = document.querySelector('.portfolio-btn');
const contactButton = document.querySelector('.contact-btn');

homePageButton.addEventListener('click',()=>{
  if(window.location.pathname === '/') return;
  window.location.href = '/'
})

aboutButton.addEventListener('click',()=>{
    if(window.location.pathname === '/about') return;
    window.location.href = '/about';
})

portfolioButton.addEventListener('click',()=>{
  if(window.location.pathname === '/portfolio') return;
  window.location.href = '/portfolio'
})

contactButton.addEventListener('click',()=>{
  if(window.location.pathname === '/contact') return;
  window.location.href = '/contact'
})