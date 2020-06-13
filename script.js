
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

  var NatGeoLayer = L.tileLayer(

    // 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',

      // 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  // attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',

  // 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	// attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
  
  
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYW50b25pby1sZWJsYW5jIiwiYSI6ImNrYjNyeWJweTBuOTUybm55MG0yank2eGsifQ.6IQBrnpE9IbXYzawUROheQ"
  }).addTo(map);

  var NatGeoLayer = L.tileLayer(
   'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    maxZoom: 18,
  }).addTo(map);



  
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
    {"name":"Laos", 'lat': 19.882003512, 'lon': 102.1405166},
    {"name":"Cambodia",'lat':11.5624500,'lon':104.9160100},
    {"name":"Indonesia",'lat':-8.65,'lon':115.21667},
    {"name":"Singapore",'lat':1.2896700,'lon':103.8500700}
  ]


  var Geneve = {
    "coords": [
      {"lat":45.74846, "lon":4.84671},
      {'lat': 46.198767990, 'lon': 6.1420200321}
    ],
    'color':'green'
  };

  var Chartreuse = {
    "coords": [
      {"lat":45.74846, "lon":4.84671},
      {'lat': 45.36769249073883, 'lon': 5.811835378953392},
    ],
    'color':'green'
  }
  var stEtienne = {
    "coords": [
      {"lat":45.74846, "lon":4.84671},
      {'lat': 45.439105765, 'lon': 4.388047578}
    ],
    'color':'green'
  }
  var Suecia = {
    "coords": [
      {"lat":50.85045, "lon":4.348783},
      {'lat':52.37403000,'lon':4.8896900},
      {'lat': 52.71673533, 'lon': 7.2899137200},
      {'lat': 55.601896, 'lon': 12.9962475},
      {"lat":56.04673 , "lon":12.69437},
      {'lat': 55.88142919, 'lon': 12.479472847},
      {'lat':55.6759400,'lon':12.56553},
    ],
    'color':'red'
  }

  var Loire = {
    "coords": [
      {'lat': 47.06095274, 'lon': -0.8799561280},
      {"lat":47.9028900 , "lon":1.9038900}
    ],
    'color':'red'
  }

  var Flores = {
    "coords": [
      {'lat': -8.497775539427568, 'lon': 119.88375695146595},
      {'lat': -8.770494625948603, 'lon': 121.81974630400296}
    ],
    'color':'green'
  }

  
  var motoTrip = {
    "coords": [
      {'lat': 20.9866677862, 'lon': 105.8633968, "name":"Hanoi"},
      {'lat': 18.663883585804594, 'lon': 105.68559653121923},
      {'lat': 17.661150427670908, 'lon': 105.76176341475005},
      {'lat': 17.397416699541118, 'lon': 104.82452369275713, "name":"thakek"},
      {'lat': 14.030790782469872, 'lon': 105.88005864102325, 'name':"4kIs"},
      {'lat': 15.175404679514559, 'lon': 106.24073613731012, 'name':"Paksong"},
      {'lat': 15.712551397930111, 'lon': 106.42917188624406},
      {'lat': 17.710236637171764, 'lon': 105.14736994800951},
      {'lat': 17.952191125513238, 'lon': 104.74226685575996, 'name':'konglor'},
      {'lat': 16.032397181745033, 'lon': 108.21130829906032, 'name':'Danang'},
      {'lat': 12.2358212, 'lon': 109.18211312, 'name':'nhaTrang'},
      {'lat': 11.936540054, 'lon': 108.4378800,'name':'Dalat'},
      {'lat': 10.77590229339, 'lon': 106.691661703,'name':'HCM'},
      {'lat': 10.03262939295, 'lon': 105.779780146,'name':'canTho'},
      {'lat': 10.61525995857, 'lon': 104.180503299,'name':'Kampot'},
      {'lat': 10.57968038688618, 'lon': 103.55746164633494, 'name':'Otres'},
      {'lat': 11.18873169583665, 'lon': 103.56126886843124, 'name':'parkEntry'},
      {'lat': 11.483642333084795, 'lon': 103.50848540612819},
      {'lat': 11.820892008875598, 'lon': 103.2724397678695},
      {'lat': 12.306378482203884, 'lon': 103.10930186843765, 'name':'VealVeng'},
      {'lat': 13.093191600790263, 'lon': 103.2000504625441, 'name':'Battambang'},
      {'lat': 13.441372915039294, 'lon': 103.83901204374143, 'name':'Angkor'},
      {'lat':11.5624500,'lon':104.9160100, "name":"PnhomPenh"},

    ],
    'color':'green'
  }
 
  var trips = [Suecia, Geneve, Loire, Chartreuse, stEtienne, Flores, motoTrip];

  

  places.forEach(place =>   
    L.marker([place.lat, place.lon]).addTo(map)
    .bindPopup(place.name))
    
  trips.forEach(trip=> {
    var waypoints = [] ;
    for (point of trip.coords){
      waypoints.push(L.latLng(point.lat,point.lon))
    }
    L.Routing.control({
      waypoints: waypoints,
      router: L.Routing.mapbox("pk.eyJ1IjoiYW50b25pby1sZWJsYW5jIiwiYSI6ImNrYjNyeWJweTBuOTUybm55MG0yank2eGsifQ.6IQBrnpE9IbXYzawUROheQ"),
      fitSelectedRoutes:false,
      show:false,
      addWaypoints:false,
      draggableWaypoints:false,
      createMarker:()=> {return false},
      lineOptions:{
        'styles':[{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: trip.color, opacity: 1, weight: 2}]
        }
      
    }).addTo(map);
  }    
 )




  map.on('click', function(e) {
    console.log(e.latlng);})
}