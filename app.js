const mobileMenuClick = document.querySelector('.toggle');
const mobileMenuContent = document.querySelector('.main-nav__items');
const mobileMenu = document.querySelector('.main-nav');
const mobileMenuItem = document.querySelector('.main-nav__item');

const start = document.querySelector('.start');
const about = document.querySelector('.about');
const technologies = document.querySelector('.technologies');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

start.addEventListener('click', function() {
  smoothScroll('#start', 1000);
});
about.addEventListener('click', function() {
  smoothScroll('#about', 1000);
});
technologies.addEventListener('click', function() {
  smoothScroll('#technologies', 1000);
});
projects.addEventListener('click', function() {
  smoothScroll('#projects', 1000);
});
contact.addEventListener('click', function() {
  smoothScroll('#footer', 1000);
});


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

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if(startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

   function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
  };

  requestAnimationFrame(animation);
}


