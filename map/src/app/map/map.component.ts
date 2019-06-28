import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {
    this.getUserLocation();

    // const span = (Element) document.getElementsByClassName('close')[0];

    /*
    span.onclick = function() {
      modal.style.display = 'none';
    };
    */
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}
