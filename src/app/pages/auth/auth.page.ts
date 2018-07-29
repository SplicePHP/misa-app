import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private amplifyService: AmplifyService,
    private router:Router
  ) { 
    this.amplifyService = amplifyService;
    this.router = router;
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === "signedIn") {
        this.router.navigateByUrl('/home');
      }
    })
  }

  ngOnInit() {
  }

}
