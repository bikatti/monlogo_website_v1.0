var ipad = window.matchMedia('screen and (max-width: 768px)');
// var desktop = window.matchMedia('screen and (min-width: 768px)');

var menu = document.querySelector('.o-nav');
var menuContent = document.querySelector('.o-nav__content');
var listLinks = document.querySelector('.m-itemContent__list');

var facebook = document.querySelector('.a-facebook');
var instagram = document.querySelector('.a-instagram');
var whatsapp = document.querySelector('.a-whatsapp');

var menuMb = document.querySelector('.m-itemContent');


// Burguer
var burgerButton = document.querySelector('#burger');
var burgerOut = document.querySelector('#burgerOut');
var byeBye = document.querySelector('.m-CallToAction');

ipad.addListener(validation)

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
    else {
        burgerButton.removeEventListener('click', hideShow)
        burgerOut.addEventListener('click', hideShow)
    }
}

validation(ipad);

function hideShow() {
    if (menuMb.classList.contains('-isActive')) {
        menuMb.classList.remove('-isActive');
        byeBye.classList.remove('-d-none');
        listLinks.style.color = (`#fefefe`);
    } else {
        menuMb.classList.add('-isActive');
        byeBye.classList.add('-d-none');
        listLinks.style.color = (`#315172`);
    }
}


$(window).scroll(() => {
    if ($(".o-nav").offset().top < 30) {
      $(".-bColor").addClass("-d-none");
      $(".-bWhite").removeClass("-d-none");
      $(".a-btnJS").addClass("-outlineLightin");
      $(".a-btnJS").removeClass("-outlinePrimary");
      listLinks.style.color = (`#fefefe`);
      menuContent.style.background = (`transparent`);
      facebook.style.content = (`url('/dist/assets/img/iconos/facebook_white.svg')`);
      instagram.style.content = (`url('/dist/assets/img/iconos/instagram_white.svg')`);
      whatsapp.style.content = (`url('/dist/assets/img/iconos/whatsapp_white.svg')`);
    }
  });

  $(window).scroll(function() {
    if ($(".o-nav").offset().top >= 30) {
        listLinks.style.color = (`#315172`);
        menuContent.style.background = (`#fefefe`);
        $(".-bWhite").addClass("-d-none");
        $(".-bColor").removeClass("-d-none");
        $(".a-btnJS").addClass("-outlinePrimary");
        $(".a-btnJS").removeClass("-outlineLightin");
        facebook.style.content = (`url('/dist/assets/img/iconos/facebook.svg')`);
        instagram.style.content = (`url('/dist/assets/img/iconos/instagram.svg')`);
        whatsapp.style.content = (`url('/dist/assets/img/iconos/whatsapp.svg')`);
    }
  });

