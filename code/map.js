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
  
  var Streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

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
    "<span class='layer-legend'>NatGeo</span>": NatGeo,
    "Satellite":ArcGis,
    "Streets":Streets,
    "Topographic": topoLayer,
    "Night":Dark,
  };
  
  // DEFINING THE MAP
  var map = L.map('travel-map', {
    center: [30, 8],
    zoom: 3.2,
    layers: [NatGeo],
    minZoom: 2.5,
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

  // EUROPE TRIPS


  var suecia_polyline = {
    "coords": [
      {"lat":50.85045, "lon":4.348783, 'name':'Brussels'},
      {'lat': 51.32969493475225, 'lon': 4.522708011202674, 'name':'Maria-ter-Heide'},
      {'lat': 52.145611242052944, 'lon': 4.703416128987584, 'name':'Alphen aan den Rijn'},
      {'lat': 52.35936979782573, 'lon': 4.872050754763496, 'name':"Amsterdam"},
      {'lat': 52.38255592268673, 'lon': 5.421426299023865, 'name':'Almere'},
      {'lat': 52.65503179660259, 'lon': 6.875491271940366, 'name':'Emlichheim'},
      {'lat': 52.96608015540326, 'lon': 8.504115872005947, 'name':'Uhlhorn'},
      {'lat': 53.53797179613342, 'lon': 10.010777261144359, 'name':'Hamburg'}, 
      {'lat': 54.10161731279758, 'lon': 10.86615648077714, 'name': 'Grömitz'},
      {'lat': 55.086038507659595, 'lon': 11.961258708985216, 'name':'Vordingborg'},
      {'lat': 55.69344331855728, 'lon': 12.559649460460196, 'name':'Copenhagen'},
      {'lat': 55.601896, 'lon': 12.9962475},
      {'lat': 55.806410937687666, 'lon': 12.955778046535501, 'name':'Helsingborg'},
      {"lat":56.04673 , "lon":12.69437},
      {'lat': 55.88142919, 'lon': 12.479472847},
      {'lat':55.6759400,'lon':12.56553},
    ],
    'color':'green'
  }

  var suecia_markers = {
    "coords": [
      {"lat":50.85045, "lon":4.348783, 'name':'Brussels', 'km':0, 'country':'Belgium'},
      {'lat': 51.32969493475225, 'lon': 4.522708011202674, 'name':'Maria-ter-Heide', 'km':10, 'country':'Netherlands'},
      {'lat': 52.145611242052944, 'lon': 4.703416128987584, 'name':'Alphen aan den Rijn', 'km':10, 'country':'Netherlands'},
      {'lat': 52.35936979782573, 'lon': 4.872050754763496, 'name':"Amsterdam", 'country':'Netherlands'},
      {'lat': 52.38255592268673, 'lon': 5.421426299023865, 'name':'Almere', 'country':'Netherlands'},
      {'lat': 52.65503179660259, 'lon': 6.875491271940366, 'name':'Emlichheim', 'country':'Germany'},
      {'lat': 52.96608015540326, 'lon': 8.504115872005947, 'name':'Uhlhorn', 'country':'Germany'},
      {'lat': 53.53797179613342, 'lon': 10.010777261144359, 'name':'Hamburg', 'country':'Germany'}, 
      {'lat': 54.10161731279758, 'lon': 10.86615648077714, 'name': 'Grömitz', 'km':900, 'country':'Germany'},
      {'lat': 55.086038507659595, 'lon': 11.961258708985216, 'name':'Vordingborg', 'country':'Denmark'},
      {'lat': 55.69344331855728, 'lon': 12.559649460460196, 'name':'Copenhagen', 'country':'Denmark'},
      {'lat': 55.806410937687666, 'lon': 12.955778046535501, 'name':'Helsingborg', 'country':'Sweden'},
      {'lat':55.6759400,'lon':12.56553, 'name':'Copenhagen', 'country':''},
    ],
    'color':'green'
  }
  

  var geneve_polyline = {
    "coords": [
      {'lat': 45.76879073586087, 'lon': 4.827875117075414},
      {'lat': 46.198767990, 'lon': 6.1420200321}
    ],
    'color':'yellow'
  };

  var geneve_marker = {
    "coords": [
      {'lat': 45.76879073586087, 'lon': 4.827875117075414, 'name':'Lyon', "country":"France"},
      {'lat': 46.198767990, 'lon': 6.1420200321,  'name':'Genebra', 'country':'Switzerland'},
    ],
    'color':'green'
  };
    
  var chartreuse_polyline = {
    "coords": [
      {'lat': 45.76879073586087, 'lon': 4.827875117075414,},
      {'lat': 45.36769249073883, 'lon': 5.811835378953392},
    ],
    'color':'green'
  }

  var chartreuse_marker = {
    "coords": [
      {'lat': 45.76879073586087, 'lon': 4.827875117075414, 'name':'Lyon', "country":"France"},
      {'lat': 45.36769249073883, 'lon': 5.811835378953392, 'name':'Le Grand Som', 'country':'Alpes'},
    ],
    'color':'green'
  }

  var stEtienne_polyline = {
    "coords": [
      {'lat': 45.76879073586087, 'lon': 4.827875117075414,},
      {'lat': 45.59198029578722, 'lon': 4.766975542021293},
      {'lat': 45.439105765, 'lon': 4.388047578},
      {'lat': 45.76879073586087, 'lon': 4.827875117075414},
    ],
    'color':'purple'
  }

  var stEtienne_markers = {
    "coords": [
      {'lat': 45.76879073586087, 'lon': 4.827875117075414, 'name':'Lyon', "country":"France"},
      {'lat': 45.439105765, 'lon': 4.388047578, 'name':'Saint-Etienne', 'country':'France'},
    ],
    'color':'purple'
  }

  var loire_polyline = {
    "coords": [
      {'lat': 47.06095274, 'lon': -0.8799561280},
      {'lat': 47.25883330459712, 'lon': -0.0787703384809957},
      {'lat': 47.38786925483467, 'lon': 0.6881933289343722},
      {'lat': 47.58804904063447, 'lon': 1.3321037358737446},
      {"lat":47.9028900 , "lon":1.9038900}
    ],
    'color':'green'
  }

  var loire_markers = {
    "coords": [
      {'lat': 47.06095274, 'lon': -0.8799561280, 'name':'', 'country':''},
      {'lat': 47.25883330459712, 'lon': -0.0787703384809957, 'name':'', 'country':''},
      {'lat': 47.38786925483467, 'lon': 0.6881933289343722, 'name':'', 'country':''},
      {'lat': 47.58804904063447, 'lon': 1.3321037358737446, 'name':'', 'country':''},
      {"lat":47.9028900 , "lon":1.9038900, 'name':'', 'country':''}
    ],
    'color':'green'
  }

  map.on('popupopen', function(centerMarker) {
    var cM = map.project(centerMarker.popup._latlng);
    cM.y -= centerMarker.popup._container.clientHeight/2
    map.setView(map.unproject(cM),16, {animate: true});
});
    
  var world_places = raw_places.map(item => L.marker([item.lat, item.lon]).bindPopup(item.name))
  var asia = asia_places.map(item => L.marker([item.lat, item.lon]).bindPopup(item.name))

  var trips_polyline = [suecia_polyline, geneve_polyline, loire_polyline, chartreuse_polyline, stEtienne_polyline];
  var trips_markers = [suecia_markers, geneve_marker, loire_markers, chartreuse_marker, stEtienne_markers];
  
  trips_polyline.forEach(trip=>{
    L.polyline(
      trip.coords.map(item => [item.lat,item.lon]), 
      {color: trip.color}
      ).addTo(map);
  });

  
  var asiaIcon = L.divIcon({
    className: 'asia-icon',
    iconSize: [15, 15],
  });

  trips_markers.forEach(trip=>{
      map.addLayer(L.layerGroup(
                  trip.coords.map((item,index) => 
                  L.marker([item.lat, item.lon], {icon:asiaIcon})
                  .bindPopup('<strong>Day '+(index)+':</strong> '+item.name+','+item.country))
                  ));
              
    });


  var customIcon = L.icon({
    iconUrl: '../images/marker.svg',
    iconSize:     [38, 95], 
});
  

  polarstep_trip = get_polarsteps_trip();
  // console.log(polarstep_trip)
  var polarstep_marker = 
    polarstep_trip.all_steps.map((item,index) => 
      L.marker([item.location.lat, item.location.lon], {icon:asiaIcon})
      .bindPopup('<strong>Step '+index+':</strong> '+item.location.full_detail));

  var asia_polyline = L.polyline(
    polarstep_trip.all_steps.map(item =>[item.location.lat, item.location.lon]));
  // map.fitBounds(asia_polyline.getBounds());

  var plane_style = {'color':'black', 'dashArray': '5'};
  var transport_style = {'color':'blue'};
  var motorbike_style = {'color':'red'};

  var trenches = [
    {'start':0, 'end':2, 'style':plane_style},
    {'start':1, 'end':26, 'style':transport_style},
    {'start':25, 'end':58, 'style':motorbike_style},
    {'start':57, 'end':59, 'style':transport_style},
    {'start':58, 'end':61, 'style':plane_style},
    {'start':60, 'end':65, 'style':transport_style},
    {'start':64, 'end':66, 'style':plane_style},
    {'start':65, 'end':68, 'style':transport_style},
    {'start':67, 'end':72, 'style':motorbike_style},
    {'start':71, 'end':75, 'style':plane_style},
   ]

   trenches.forEach( trench => {
    L.polyline(
      polarstep_trip.all_steps.slice(trench.start,trench.end).map(item =>[item.location.lat, item.location.lon]),
      trench.style)
      .addTo(map);
  });

  var overlayMaps = {
    "Countries": L.layerGroup(world_places),
    // "AsiaTrip": L.layerGroup(polarstep_marker),
    // "Asia": L.layerGroup(asia),
  };

  // ADDING CONTROL LAYERS
  L.control.layers(baseMaps,overlayMaps,{collapsed:false}).addTo(map);   
  map.addLayer(L.layerGroup(polarstep_marker));
  // ADDING SCALE
  L.control.scale({'imperial':false, maxWidth:200}).addTo(map);
  
  // ADDING LEGEND
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = map => {

    var div = L.DomUtil.create('div', 'map-legend')
    var legend = [
          {'name':'Bicycle', 'color':'green'},
          {'name':'MotorBike', 'color':'red'},
          {'name':'Bus/Boat', 'color':'blue'},
          {'name':'Airplane', 'color':'black'},
        ];
    div.innerHTML = legend.reduce( (html,item) => 
        html + '<div><i style="background: '+item.color+'"></i> ' + item.name + '</div>',''
    );
    return div;
  };

  legend.addTo(map);
    
  map.on('click', function(e) {
    console.log(e.latlng);
  })
  // ROUTING
  // 100 000 free requests
  // trips_polyline.forEach(trip=> {
  //   L.Routing.control({
  //     waypoints: trip.coords.map(item => L.latLng(item.lat,item.lon)),
  //     router: L.Routing.mapbox("pk.eyJ1IjoiYW50b25pby1sZWJsYW5jIiwiYSI6ImNrYjNyeWJweTBuOTUybm55MG0yank2eGsifQ.6IQBrnpE9IbXYzawUROheQ"),
  //     fitSelectedRoutes:false,
  //     show:false,
  //     addWaypoints:false,
  //     draggableWaypoints:false,
  //     createMarker:()=> {return false},
  //     lineOptions:{
  //       'styles':[{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: trip.color, opacity: 1, weight: 2}]
  //       }
  //   })
  //   .addTo(map);
  // })

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