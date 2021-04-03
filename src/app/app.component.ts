import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Power Reporting';
  isUserLogged = false
  
  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.isLogged();
  }
  
  isLogged() {
    this.isUserLogged = this.authentocationService.isUserLoggedIn();
  }

  logout() {
    this.authentocationService.logOut();
    this.router.navigate(['']);
    this.isLogged();
  }
}
