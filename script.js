
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