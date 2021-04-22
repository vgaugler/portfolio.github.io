/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

//cv top dwn
const contentcv = document.querySelector('#card1');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('activate');
  contentcv.classList.toggle('activate');
};
const contentcv2 = document.querySelector('#card2');
document.querySelector('#toggle2').onclick = function () {
  this.classList.toggle('activate');
  contentcv2.classList.toggle('activate');
};
const contentcv3 = document.querySelector('#card3');
document.querySelector('#toggle3').onclick = function () {
  this.classList.toggle('activate');
  contentcv3.classList.toggle('activate');
};

// change skills_hovermsg selon taille d'écran

/*const msg = document.querySelector('.skills_hovermsg')

if (screen.width < 768){
    msg.innerHTML = "Click on icon"
} else if (screen.width > 768 && msg.textContent === "Click on icon") {
    msg.innerHTML = "Hover on icon"
} else {
    msg.innerHTML = "Hover on icon"
} */
/* scroll */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

let section = document.querySelector('.background-skewed');
let about = document.querySelector('.about_circle');
var text = document.querySelector('#textHTML');
var text2 = document.querySelector('#textCSS');
var text3 = document.querySelector('#textJS');
var text4 = document.querySelector('#textPHP');
var text5 = document.querySelector('#textPaint');
var btn = document.querySelector('.fa-html5');
var btn2 = document.querySelector('.fa-css3-alt');
var btn3 = document.querySelector('.fa-js-square');
var btn4 = document.querySelector('.fa-php');
var btn5 = document.querySelector('.fa-react');

window.addEventListener('scroll', function () {
  let value = document.scrollingElement.scrollTop;
  var position = section.offsetTop;

  if (value > position + 100) {
    section.style.clipPath = 'polygon(49% ' + -value + '%, 0 0, 100% 0)';
  } else {
    section.style.clipPath = 'polygon(49% 100%, 0 0, 100% 0)';
  }
});
window.addEventListener('scroll', function () {
  let value2 = document.scrollingElement.scrollTop;
  var position2 = about.offsetTop;
  if (value2 > position2 + 400) {
    about.style.clipPath = 'circle(10% at right 70%)';
  } else {
    about.style.clipPath = 'circle(30% at right 70%)';
  }
});

/*window.addEventListener('scroll', function(){ 
       
       if (section.className === "background-skewed"){
          setTimeout(function () {
              section.classList.add('acti')}, 300)}

        else  {
            setTimeout(function () {
                section.classList.remove('acti')}, 2000)};
        }
    
);*/

btn.addEventListener('mouseenter', function () {
  text.classList.toggle('act');
});
btn.addEventListener('mouseleave', function () {
  text.classList.toggle('act');
});
btn2.addEventListener('mouseenter', function () {
  text2.classList.toggle('act');
});
btn2.addEventListener('mouseleave', function () {
  text2.classList.toggle('act');
});
btn3.addEventListener('mouseenter', function () {
  text3.classList.toggle('act');
});
btn3.addEventListener('mouseleave', function () {
  text3.classList.toggle('act');
});
btn4.addEventListener('mouseenter', function () {
  text4.classList.toggle('act');
});
btn4.addEventListener('mouseleave', function () {
  text4.classList.toggle('act');
});
btn5.addEventListener('mouseenter', function () {
  text5.classList.toggle('act');
});
btn5.addEventListener('mouseleave', function () {
  text5.classList.toggle('act');
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 400 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });
