const mobileMenuClick = document.querySelector('.toggle');
const mobileMenuContent = document.querySelector('.main-nav__items');
const mobileMenu = document.querySelector('.main-nav');

mobileMenuClick.addEventListener('click', function() {
  if(mobileMenuContent.classList.contains('active')){
    mobileMenuContent.classList.remove('active');
  } else {
    mobileMenuContent.classList.add('active');
  }
});