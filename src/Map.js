import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

const key = 'eGjnmBVKciAGwk5W721NKLqNRL6J73Jy';

const MapQuest = () => {
  return (
    <div >
      <Map apiKey={key} center='Derry' width="1400" height="800" zoom="14"/>
    </div>
  );
}

export default MapQuest;