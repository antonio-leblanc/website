

//   <------------ On load Functions ------------->
$(window).on("load",
  function(){ 
    $(".loader-wrapper").fadeOut("slow");

    $(".typed-element").typed(
      {
        strings: [
          "ForestFire Engineering",
          "Cycling",
          "Software Development",
          "Piano",
          "Artificial Intelligence",
          "Adventure"
        ],
        typeSpeed: 35,
        backSpeed: 15,
        loop:true,
      }
    );

    $("#travel-map").css('visibility', 'visible')

    }
);


var ctx = document.getElementById('skillsChart').getContext('2d');
// var skillsChart = new Chart(ctx, {
//   type: 'doughnut',
  
//   data: {
//     labels: ['Python', 'JS', 'Angular', 'Docker', 'Psql', 'AWS'],
//     datasets: [{
//       label: 'Skills',
//       data: [5, 5, 5, 4, 3, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.8)',
//         'rgba(54, 162, 235, 0.8)',
//         'rgba(255, 206, 86, 0.8)',
//         'rgba(75, 192, 192, 0.8)',
//         'rgba(153, 102, 255, 0.8)',
//         'rgba(255, 159, 64, 082)'
//        ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       hoverOffset: 5,
//       borderWidth: 1
//     }]
//   }
// });

const data = {
  labels: [
    'Python',
    'JavaScript',
    'Angular',
    'PostgreeSQL',
    'Docker',
    'AWS'
  ],
  datasets: [{
    label: 'Tech Skills',
    data: [5, 5, 4, 3, 3, 3],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }, ]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
   },
    scale: {
      min: 0,
      max: 5,
      step:1
    },
    ticks:{
      stepSize:1
    }
  }
}

var skillsChart = new Chart(ctx, config);


//   <------------ Header Disappears ------------->

if ( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos){
      $("#header").css("top" , "0");
    } else {
      $("#header").css("top" , "-4rem");
    }
    prevScrollpos = currentScrollPos;
  }

}


//   <------------ Slide do sections ------------->

$('a[href^="#"]').click(
  function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  }
);


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

