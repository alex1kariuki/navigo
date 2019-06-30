import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    // this.executemap();
    /*Initializing Map*/
    mapboxgl.accessToken = environment.mapboxToken;

  }
  executemap() {
  const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 16,
      pitch: 80,
      minZoom: 7.5, // restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });
  }
}
