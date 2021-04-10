interface GibsProduct {
  layer: string;
  tileMatrixSet: string;
  format: string;
}  

export const GibsProducts: GibsProduct[] = [
  {
    layer: 'VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1',
    tileMatrixSet: '250m',
    format: 'jpeg',
  },
  // {
  //   layer: 'MODIS_Aqua_SurfaceReflectance_Bands121',
  //   tileMatrixSet: '250m',
  //   format: 'jpeg',
  // },
  // {
  //   layer: 'MODIS_Terra_EVI_8Day',
  //   tileMatrixSet: '250m',
  //   format: 'png',
  // },
  // {
  //   layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
  //   tileMatrixSet: '250m',
  //   format: 'jpeg',
  // },
  {
    layer: 'VIIRS_NOAA20_Brightness_Temp_BandI5_Day',
    tileMatrixSet: '250m',
    format: 'png',
  },
]

interface BaseLayers {
  name: string;
  url: string;
  options: object;
  initWithMap:boolean;
}

export const BaseLayersList: BaseLayers[] = [
  {
    initWithMap: true,
    name: 'Satelite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    options: {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
  },
  {
    initWithMap:false,
    name: 'Topográfico',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    options: {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }
  },
  {
    initWithMap:false,
    name: 'Streets',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    options: {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
    }
  }
]
