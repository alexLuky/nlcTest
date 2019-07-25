<template>
  <div id="bodyContainer" class="container">
    
    <div id="map" style="width: 100%; height: 100%;"></div>
    <div id="toolsPane">
      <dx-drop-down-button :split-button="true" id="layerSelectDropdown"
                       :use-select-mode="false"
                       :items="data.baseLayers"
                       text="Выберите базовый слой"
                       display-expr="name"
                       key-expr="id"
                       @button-click="onBaseLayerSelect"
                       @item-click="onBaseLayerSelect" />
    </div>

  </div>
</template>

<script>
  import { DxDropDownButton, DxToolbar, DxButton  } from 'devextreme-vue'; 
  import 'devextreme/dist/css/dx.common.css';
  import 'devextreme/dist/css/dx.light.compact.css';

  import '../plugins/maptalks/maptalks.css';
  import * as maptalks from 'maptalks/dist/maptalks'; 

  import service from '../plugins/data/data.js';
export default {
  components: {
    DxButton,
    DxDropDownButton
  },
  data: function(){
    let data = service.getData();
    return {
      data,
      map: {},
    }
  },
    mounted() {
      this.renderMap(this.data.baseLayers[0]);
      //this.addLayers(this.data.layers);
  },
  methods: {
    renderMap(defaultBaseLayer) {
      defaultBaseLayer.icon = 'check';
      this.map = new maptalks.Map('map', {
        center: [-0.113049, 51.498568],
        zoom: 14,
        zoomControl: true,
        scaleControl: true,
        baseLayer: defaultBaseLayer
      })    
    },

    onBaseLayerSelect(e) {      
      let selectedLayer;    
      e.selectedItem ? selectedLayer = e.selectedItem : selectedLayer = e.itemData;
      this.setBaseLayer(selectedLayer);
    },

    setBaseLayer(layer) {
      let oldBaseLayer = this.map.getBaseLayer();
      oldBaseLayer.icon = 'close';
      layer.icon = 'check';
      this.map.setBaseLayer(layer);            
    }
  }
}
</script>

<style>
  
   #map {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

   #toolsPane {   
    color: #000;
    z-index: 10;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  #layerSelectDropdown{
    min-width: 100px;
    text-align: right;
    background-color: #fff;
    border-radius: 10px;
  }

</style>
