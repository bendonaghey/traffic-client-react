import React, { useState, useEffect } from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';
import * as mapquest from 'mapquest';
import { Subject, combineLatest } from 'rxjs';

const key = 'eGjnmBVKciAGwk5W721NKLqNRL6J73Jy';
let width = window.innerWidth;
let height = window.innerHeight;

const subject = new Subject();

const MapQuest = (props) => {

  const [locations, setLocations] = useState([]);

  const locationService = {
    locationASubject: () => subject.asObservable(),
    locationBSubject: () => subject.asObservable()
  };

  useEffect(() => {
    const subscription = locationService.locationASubject().subscribe(location => {
      if (location) {
        setLocations(location => [...locations, location]);
      } else {
        setLocations([]);
      }
    });
    return subscription.unsubscribe;
  }, []);

  if (width >= 1080) {
    return (
      <div >
        {console.log("LocationA", props.locationA)}
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

  

  mapquest.geocode(
    { address: this.locationA, key: this.key },
    (err, locationA) => {
      this.locationASubject.next(locationA.latLng);
    }
  );

  mapquest.geocode(
    { address: this.locationB, key: this.key },
    (err, locationB) => {
      this.locationBSubject.next(locationB.latLng);
    }
  );

}

// http://open.mapquestapi.com/geocoding/v1/address?key=eGjnmBVKciAGwk5W721NKLqNRL6J73Jy&location=Coleraine



export default MapQuest;