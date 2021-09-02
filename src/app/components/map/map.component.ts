import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
/*export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [50.0342, 19.5613]; // nie trafiłem w Kraków ale byłem blisko trzeba poprawić

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

// add marker on click
  this.map.on("click", addMarker);

  function addMarker(e) {
    // Add marker to map at click location
    const markerPlace = document.querySelector(".marker-position");
    markerPlace.textContent = `new marker: ${e.latlng.lat}, ${e.latlng.lng}`;

    const marker = new L.marker(e.latlng, {
      draggable: true
    })
        .addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}
*/

export class MapComponent implements OnInit {
  map;
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png'
    })
  };

  ngOnInit(): void {
    this.map = L.map('map').setView([50.0342, 19.5613], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.map.on('click', (e) => {
      let latitude = e.latlng.lat;
      let longitude = e.latlng.lng;
      console.log('You clicked the map at LAT: ' + latitude + ' and LONG: ' + longitude);
      // Clear existing marker
      //if (theMarker !== undefined) {
        //this.map.removeLayer(theMarker);
      //}

    });
  }
}
