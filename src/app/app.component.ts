import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
export let browserRefresh = false;
import { Router, NavigationStart, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Bitconia-user';
  subscription: Subscription;

  timeout;
  routerChanged = true;
  constructor(private router: Router) {
    // this.subscription = router.events.subscribe((event) => {
    //     if (event instanceof NavigationStart) {
    //       browserRefresh = !router.navigated;
    //     }
    // });
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.routerChanged = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
          this.routerChanged = false;
        }, 1000);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
 
}
