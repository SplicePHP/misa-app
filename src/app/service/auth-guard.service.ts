import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private amplifyService: AmplifyService,
    private router: Router
  ) {}

  canActivate(){
    return this.amplifyService
    .auth()
    .currentAuthenticatedUser()
    .then(user => true)
    .catch(err => {
      this.router.navigateByUrl("");
      return false;
    })
  }
}
