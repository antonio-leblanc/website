
//   <------------ On load Functions ------------->
$(window).on("load",function(){
    
    //   <------------ Fade Loader ------------->
    $(function(){
        $(".loader-wrapper").fadeOut("slow");
      });
    //   <------------ Typed Funcion ------------->
    $(function(){
      $(".typed-element").typed({
          strings: ["Mechanical Engineering", "Cycling","Data Science", 
           "Piano","Software Development","Skateboarding", "Adventure"],
          typeSpeed: 40,
          backSpeed: 20,
          loop:true,
      });
    });
  });

//   <------------ Slide do sections ------------->

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});

//   <------------ Animations ------------->
AOS.init({
offset:150,
duration:1000,
});
//   <------------ navbarClick ------------->
function menuClick(){
    $('.navbar').toggleClass('active')
}
//   <------------ TabSelection ------------->
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
        target.classList.add('active')
    })
})


//   <------------ SlideShow ------------->
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);
