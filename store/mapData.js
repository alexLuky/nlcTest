// Черновик состояния для сервера (убрать new maptalks, передавать только модель, не формировать объект слоя)
/*
import * as maptalks from 'maptalks/dist/maptalks';
import service from '../plugins/data/data.js';

export let state = () => ({
  baseLayers: []
})

export let getters = {
  baseLayers: state => state.baseLayers
}

export let mutations = {    
  setBaseLayers(state, newBaseLayers) {
    state.baseLayers = newBaseLayers;
  },

  initBaseLayers(state, baseLayers) {
    for (let layer of baseLayers) {
      layer = new maptalks.TileLayer(layer.id, {
        id: layer.id, name: layer.name, icon: layer.icon,
        urlTemplate: layer.urlTemplate,
        subdomains: layer.subdomains,
        attribution: layer.attribution
      })
    }
    commit('setBaseLayers', baseLayers);
  }
}

export let actions = {
  async fetchBaseLayers({ commit }) {
    let baseLayers = await service.getData(); //может быть заменено на выгрузку с другого сайта\базы данных
    commit('initBaseLayers', baseLayers);
  }
}

*/
