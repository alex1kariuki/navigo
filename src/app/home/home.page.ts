import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = -1.239362;
  lng = 36.726713;

  constructor() {

    /*Initializing Map*/
    mapboxgl.accessToken = environment.mapboxToken;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.executemap();
    console.log('oya');
    console.log(this.map);
  }
  executemap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
  }
}
