import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

}
