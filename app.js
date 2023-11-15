const toggle = document.querySelector('.js-toggle');

const wisselButton = function () {
    console.log('button clicked');
    toggle.classList.toggle('toggle--checked');

};


const init = function () {
  console.log('script loaded');
  toggle.addEventListener('click', wisselButton);
};

init();
