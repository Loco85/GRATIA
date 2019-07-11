$(document).ready(function(){

  /*MENU HAMBURGER*/
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    } 
  /*MENU HAMBURGER*/ 

  /*HEADER CAROUSEL*/
  $('.header-section__carousel').owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      navText: ["<img src='img/slider-arrow-left.png'>","<img src='img/slider-arrow-right.png'>"]
  }); 
  /*HEADER CAROUSEL*/ 

  /*BOOK A TABLE - FORM*/
  $('.book-table-section__form .btn[type="submit"]').click(function() {
  	    $('.book-table-section__form .form-control:invalid').addClass('form-control_error');
  	    $('.book-table-section__form .form-control:valid').removeClass('form-control_error');

  	    console.log('click');
  });
  $('.book-table-section__form .form-control').blur(function() {
  	    $(this).filter(':invalid').addClass('form-control_error');
  	    $(this).filter(':valid').removeClass('form-control_error');

  	    console.log('blur');
  });
  /*BOOK A TABLE - FORM*/ 

})
