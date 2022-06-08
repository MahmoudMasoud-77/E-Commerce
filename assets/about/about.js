burger = document.querySelector('.burger i');
 const nav = document.querySelector('.nav');

 function toggleNav() {
   burger.classList.toggle('fa-bars');
   burger.classList.toggle('fa-times');
   nav.classList.toggle('nav-active');
}

  burger.addEventListener('click', function() {toggleNav();});


  /* ************ go top************ */
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })