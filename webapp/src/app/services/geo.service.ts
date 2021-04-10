import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'proj4leaflet';
import {GibsProducts, BaseLayersList} from "./geo.store";

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  
  private map:any;

  constructor() { }

  mapInit(){
    // const myMap = L.map('map').setView([51.505, -0.09], 13);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(myMap);

  console.log('%🛰️ Create MeteoMap', 'background-color:#2b8046')
    
    var EPSG4326 = new L.Proj.CRS(
      'EPSG:4326',
      '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs', {
        origin: [-180, 90],
        resolutions: [
          0.5625,
          0.28125,
          0.140625,
          0.0703125,
          0.03515625,
          0.017578125,
          0.0087890625,
          0.00439453125,
          0.002197265625
        ],
        // Values are x and y here instead of lat and long elsewhere.
        bounds: new L.Bounds([
          [-180, -90],
          [180, 90]
        ])
      }
    );
  
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 2,
      maxZoom: 8,
      attributionControl:false,
      zoomControl:false,
      crs: EPSG4326,
      maxBounds: [
        [-120, -220],
        [120, 220]
      ]
    });
  
    
    
    let baseMaps = Object()
    
    for (const product of GibsProducts) {
      var template =
        '//gibs-{s}.earthdata.nasa.gov/wmts/epsg4326/best/{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.{format}';
      var layer = L.tileLayer(template, {
        layer: product.layer,
        tileMatrixSet: product.tileMatrixSet,
        format: product.format,
        time: '2021-03-31',
        tileSize: 512,
        subdomains: 'abc',
        noWrap: true,
        continuousWorld: true,
        // Prevent Leaflet from retrieving non-existent tiles on the
        // borders.
        bounds: [
          [-89.9999, -179.9999],
          [89.9999, 179.9999]
        ],
        attribution:
          '<a href="https://wiki.earthdata.nasa.gov/display/GIBS">' +
          'NASA EOSDIS GIBS</a>&nbsp;&nbsp;&nbsp;' +
          '<a href="https://github.com/nasa-gibs/web-examples/blob/master/examples/leaflet/geographic-epsg4326.js">' +
          'View Source' +
          '</a>'
      });
    
      baseMaps[`${product.layer}`] = layer
    }


    var overlayMaps = {}

    L.control.layers(baseMaps, overlayMaps, {collapsed:false}).addTo(this.map);
    this.map.addLayer(layer);

   }
  }