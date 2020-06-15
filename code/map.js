function mapInit(){

  // DEFIING BASELAYERS
  var Dark = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
    attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
    minZoom: 1,
    maxZoom: 8,
    format: 'jpg',
    time: '',
    tilematrixset: 'GoogleMapsCompatible_Level'
  });
    
  var ArcGis = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  })

  var NatGeo = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
  })
      
  var topoLayer = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    maxZoom: 18,
  })

  var baseMaps = {
    "Satellite":ArcGis,
    "<span class='color: red'>NatGeo</span>": NatGeo,
    "Topographic": topoLayer,
    "Night":Dark,
  };
  
  // DEFINING THE MAP
  var map = L.map('travel-map', {
    center: [30, 8],
    zoom: 3.2,
    layers: [ArcGis]
  });
    
  // DEFINING OVERLAY LAYERS
  var raw_places = 
  [
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
    
    {"name":"Morocco",'lat':31.669746,'lon':-7.973328}
  ]
  var asia_places = 
      [
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
    
  var places = raw_places.map(item => L.marker([item.lat, item.lon]).bindPopup(item.name))
  var asia = asia_places.map(item => L.marker([item.lat, item.lon]).bindPopup(item.name))

  var trips = [Suecia, Geneve, Loire, Chartreuse, stEtienne];
  
  trips.forEach(trip=>{
    L.polyline(
      trip.coords.map(item => [item.lat,item.lon]), 
      {color: trip.color}
      ).addTo(map);
  });

  
  var customIcon = L.icon({
    iconUrl: '../images/marker.svg',
    iconSize:     [38, 95], 
});
  
  polarstep_trip = get_polarsteps_trip();
  console.log(polarstep_trip)
  var polarstep_marker = polarstep_trip.all_steps.map((item,index) => L.marker([item.location.lat, item.location.lon]).bindPopup(item.location.full_detail+index))
  var polarstep_latlon = polarstep_trip.all_steps.map(item =>[item.location.lat, item.location.lon]);
  var polyline = L.polyline(polarstep_latlon, {color: 'white'}).addTo(map);
  map.fitBounds(polyline.getBounds());

  var idx_trips = [0,1,74];

  var overlayMaps = {
    "Cities": L.layerGroup(places),
    "Asia": L.layerGroup(asia),
    "AsiaTIO": L.layerGroup(polarstep_marker),
  };

  
  L.control.layers(baseMaps,overlayMaps,{collapsed:false}).addTo(map);   


  var legend = L.control({position: 'bottomright'});
  L.control.scale({'imperial':false, maxWidth:200}).addTo(map);

  legend.onAdd = function (map) {

      var div = L.DomUtil.create('div', 'info legend'),
        transport = ['Bicycle', 'MotorBike']
        colors = ['blue','red'];

      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < transport.length; i++) {
          div.innerHTML +=
              '<div><i style="background: '+colors[i]+'"></i> ' + transport[i] + '</div>' ;
      }
      return div;
  };

  legend.addTo(map);
    
  map.on('click', function(e) {
    console.log(e.latlng);
  })
  // ROUTING
  // 100 000 free requests
  // trips.forEach(trip=> {
  // var waypoints = [] ;
  // for (point of trip.coords){
  //   waypoints.push(L.latLng(point.lat,point.lon))
  // }
  // // L.Routing.control({
  // //   waypoints: waypoints,
  // //   router: L.Routing.mapbox("pk.eyJ1IjoiYW50b25pby1sZWJsYW5jIiwiYSI6ImNrYjNyeWJweTBuOTUybm55MG0yank2eGsifQ.6IQBrnpE9IbXYzawUROheQ"),
  // //   fitSelectedRoutes:false,
  // //   show:false,
  // //   addWaypoints:false,
  // //   draggableWaypoints:false,
  // //   createMarker:()=> {return false},
  // //   lineOptions:{
  // //     'styles':[{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: trip.color, opacity: 1, weight: 2}]
  // //     }
  // // }).addTo(map);
  // }    
  // )

  // var motoTrip = {
  //   "coords": [
  //     {'lat': 20.9866677862, 'lon': 105.8633968, "name":"Hanoi"},
  //     {'lat': 18.663883585804594, 'lon': 105.68559653121923},
  //     {'lat': 17.661150427670908, 'lon': 105.76176341475005},
  //     {'lat': 17.397416699541118, 'lon': 104.82452369275713, "name":"thakek"},
  //     {'lat': 14.030790782469872, 'lon': 105.88005864102325, 'name':"4kIs"},
  //     {'lat': 15.175404679514559, 'lon': 106.24073613731012, 'name':"Paksong"},
  //     {'lat': 15.712551397930111, 'lon': 106.42917188624406},
  //     {'lat': 17.710236637171764, 'lon': 105.14736994800951},
  //     {'lat': 17.952191125513238, 'lon': 104.74226685575996, 'name':'konglor'},
  //     {'lat': 16.032397181745033, 'lon': 108.21130829906032, 'name':'Danang'},
  //     {'lat': 12.2358212, 'lon': 109.18211312, 'name':'nhaTrang'},
  //     {'lat': 11.936540054, 'lon': 108.4378800,'name':'Dalat'},
  //     {'lat': 10.77590229339, 'lon': 106.691661703,'name':'HCM'},
  //     {'lat': 10.03262939295, 'lon': 105.779780146,'name':'canTho'},
  //     {'lat': 10.61525995857, 'lon': 104.180503299,'name':'Kampot'},
  //     {'lat': 10.57968038688618, 'lon': 103.55746164633494, 'name':'Otres'},
  //     {'lat': 11.18873169583665, 'lon': 103.56126886843124, 'name':'parkEntry'},
  //     {'lat': 11.483642333084795, 'lon': 103.50848540612819},
  //     {'lat': 11.820892008875598, 'lon': 103.2724397678695},
  //     {'lat': 12.306378482203884, 'lon': 103.10930186843765, 'name':'VealVeng'},
  //     {'lat': 13.093191600790263, 'lon': 103.2000504625441, 'name':'Battambang'},
  //     {'lat': 13.441372915039294, 'lon': 103.83901204374143, 'name':'Angkor'},
  //     {'lat':11.5624500,'lon':104.9160100, "name":"PnhomPenh"},
  //   ],
  //   'color':'green'
  // }
  // var Flores = {
  //   "coords": [
  //     {'lat': -8.497775539427568, 'lon': 119.88375695146595},
  //     {'lat': -8.770494625948603, 'lon': 121.81974630400296}
  //   ],
  //   'color':'green'
  // }


}