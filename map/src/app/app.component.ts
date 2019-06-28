import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const modal = document.getElementById('myModal');

    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
    };

   }


  OnInit() {

  }

  eventHandler(keyCode) {
    if ( keyCode === 13) {
      console.log(keyCode);
    }
  }

}
