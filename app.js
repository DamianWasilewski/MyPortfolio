const mobileMenuClick = document.querySelector('.toggle');
const mobileMenuContent = document.querySelector('.main-nav__items');
const mobileMenu = document.querySelector('.main-nav');
const mobileMenuItem = document.querySelector('.main-nav__item');

mobileMenuClick.addEventListener('click', function() {
  if(mobileMenuContent.classList.contains('active')){
    mobileMenuContent.classList.remove('active');
  } else {
    mobileMenuContent.classList.add('active');
  }
});

mobileMenu.addEventListener('click', closeMobileNav);

function closeMobileNav(e) {
  if(e.target.parentElement.parentElement.classList.contains('active')) {
    e.target.parentElement.parentElement.classList.remove('active');
  }
}
