import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  constructor(
    private amplifyService: AmplifyService,
    private router: Router
  ) {
    this.amplifyService
      .auth()
      .currentAuthenticatedUser()
      .then(user => {
        this.username = user.username;
      });
  }

  logOut() {
    this.amplifyService
      .auth()
      .signOut()
      .then(() => {
        this.router.navigateByUrl("");
      })
      .catch(err => {
        return false;
      })
  }

}
