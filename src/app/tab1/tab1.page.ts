import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: ['Ionic', 'Angular', 'YouTube', 'Sports'
   ]
  };

  constructor(private router: Router, private dataService: DataService) { }

  openDetailsWithQueryParams(){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          // special: 'whatever'
          special: JSON.stringify(this.user)
        }

      }

      this.router.navigate(['details'], navigationExtras);
  }

  openDetailsWithService(){
      this.dataService.setData(42, this.user);
      this.router.navigateByUrl('/details/42');
  }

  openDetailsWithState(){
    let navigationExtras: NavigationExtras = {
      state: {
        // special: 'whatever'
         user: this.user
        // suppe: this.suppe
      }

    }

    this.router.navigate(['details'], navigationExtras);

  }

}
