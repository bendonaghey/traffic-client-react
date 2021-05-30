import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

const key = 'eGjnmBVKciAGwk5W721NKLqNRL6J73Jy';
// let width = 1400;
// let height = 800;
let width = window.innerWidth;

const MapQuest = () => {
  
  if (width >= 1080) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="1400" height="800" zoom="14" />
      </div>
    );
  }
  else if (width >= 768 && width <= 1080) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="300" height="600" zoom="14" />
      </div>
    );
  }
  else if (width <= 768) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="300" height="600" zoom="14" />
      </div>
    );
  }
}


// width="1400" height="800  zoom="14"

export default MapQuest;