
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


function mapInit(){
  var map = L.map('travel-map').setView([24, 6], 1.5);

  var places = [
    {"name":"Brazil",'lat':-22.9027800,'lon':-43.2075000},
    {"name":"USA",'lat':40.7142700,'lon':-74.005970},
    
    {"name":"France",'lat':45.7484600,'lon':4.8467100},
    {"name":"Spain",'lat':41.38879000,'lon':2.1589900},
    {"name":"Portugal",'lat':38.7166700,'lon':-9.1333300},
    {"name":"Italy",'lat':41.8919300,'lon':12.5113300},
    
    {"name":"Germany",'lat':52.5243700,'lon':13.4105300},
    {"name":"Switzerland",'lat':46.5160000,'lon':6.6328200},
    {"name":"Czech Republic",'lat':50.0880400,'lon':14.4207600},
    {"name":"Hungary",'lat':47.49801,'lon':19.039910},
    {"name":"Austria",'lat':48.2084900,'lon':16.3720800},
    
    {"name":"Netherlands",'lat':52.37403000,'lon':4.8896900},
    {"name":"Denmark",'lat':55.6759400,'lon':12.56553},
    {"name":"Belgium",'lat':50.85045,'lon':4.348783},
    {"name":"Sweden",'lat':56.04673,'lon':12.69437},
    
    {"name":"Bulgaria",'lat':42.6975100,'lon':23.3241500},
    {"name":"Serbia",'lat':44.8040100,'lon':20.4651300},
    {"name":"Croatia",'lat':45.81444000,'lon':15.9779800},
    {"name":"Slovenia",'lat':46.3691700,'lon':14.1136100},
    
    {"name":"Morocco",'lat':31.669746,'lon':-7.973328},

    {"name":"Thailand",'lat':13.7539800,'lon':100.5014400},
    {"name":"Myanmar",'lat':16.8052800,'lon':96.1561100},
    {"name":"Hong Kong",'lat':22.2855200,'lon':114.1576900},
    {"name":"Vietnam",'lat':21.0245000,'lon':105.8411700},
    {"name":"Cambodia",'lat':11.5624500,'lon':104.9160100},
    {"name":"Indonesia",'lat':-8.65,'lon':115.21667},
    {"name":"Singapore",'lat':1.2896700,'lon':103.8500700}
  ]

  var LyonLausanne = [ [45.74846,4.84671], [46.5160, 6.63282] ];


  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYW50b25pby1sZWJsYW5jIiwiYSI6ImNrYjNyeWJweTBuOTUybm55MG0yank2eGsifQ.6IQBrnpE9IbXYzawUROheQ"
  }).addTo(map);

    
  places.forEach(place =>   
    L.marker([place.lat, place.lon]).addTo(map)
    .bindPopup(place.name))

  var poly = L.polyline(LyonLausanne, {color: 'red'}).addTo(map)

  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


  // L.Routing.control({
  //   waypoints: [
  //     L.latLng(57.74, 11.94),
  //     L.latLng(57.6792, 11.949)
  //   ],
  //   router: L.Routing.mapbox("pk.eyJ1IjoiYW50b25pby1sZWJsYW5jIiwiYSI6ImNrYjNyeWJweTBuOTUybm55MG0yank2eGsifQ.6IQBrnpE9IbXYzawUROheQ")
  // }).addTo(map);

  map.on('click', function(e) {
    console.log(map.getCenter());})
}