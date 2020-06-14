
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
    
    mapInit()
  });

//   <------------ Header Disappears ------------->

if ( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("#header").css("top" , "0");
  } else {
    $("#header").css("top" , "-4rem");

  }
  prevScrollpos = currentScrollPos;
}
}


//   <------------ Slide do sections ------------->

$('a[href^="#"]').click( function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
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

