import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

const key = 'eGjnmBVKciAGwk5W721NKLqNRL6J73Jy';
// let width = 1400;
// let height = 800;
let width = window.innerWidth;
let height = window.innerHeight;

const MapQuest = () => {
  
  if (width >= 1080) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="1600" height="900" zoom="14" />
      </div>
    );
  }
  else if (height >= 768 && height <= 1080) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="728" height="904" zoom="14" />
      </div>
    );
  }
  else if (height >= 667 && height <= 768) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="360" height="740" zoom="14" />
      </div>
    );
  }
  else if (height <= 667) {
    return (
      <div >
        <Map apiKey={key} center='Derry' width="375" height="680" zoom="14" />
      </div>
    );
  }
}


// width="1400" height="800  zoom="14"

export default MapQuest;