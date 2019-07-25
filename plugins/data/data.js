import * as maptalks from 'maptalks/dist/maptalks';

let baseLayers  = [
  new maptalks.TileLayer('layer_1', {
    id: 0, name: 'Слой №1', icon: 'close',
    urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  }),
  new maptalks.TileLayer('layer_2', {
    id: 1, name: 'Слой №2', icon: 'close',
    urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  }),
  new maptalks.TileLayer('layer_3', {
    id: 2, name: 'Слой №3', icon: 'close',
    urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    subdomains: ['a', 'b', 'c'],
    attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
  }) 
]

function initLayers() {
  for (let i = 0; i < baseLayers .length; i++) {
    baseLayers[i].id = baseLayers[i].options.id;
    baseLayers[i].name = baseLayers[i].options.name;
    baseLayers[i].icon = baseLayers[i].options.icon;
  }
}

export default {
  getData() {
    initLayers();
    return { baseLayers };
  }
};
