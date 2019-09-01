'use strict';

const topBtn = document.getElementsByClassName('scroll-up')[0];
topBtn.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
);
