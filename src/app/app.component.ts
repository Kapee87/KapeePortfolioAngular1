import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionTimingService } from './service/session-timing.service';
import { TokenServiceService } from './service/token.service';
import { NavigationEnd, Router } from '@angular/router';
import { BannerComponent } from './pages/banner/banner.component';
import { IsHomeService } from './service/is-home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public remainingTime$ = this.sessionService.showRemaining();
  public isHomeStr = this.isHomeService.getIsHome();

  title = 'KapeePortfolio';
  logged: boolean = false;
  isHome: boolean = false;
  constructor(
    private sessionService: SessionTimingService,
    private tokenService: TokenServiceService,
    private router: Router,
    private isHomeService: IsHomeService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      event instanceof NavigationEnd
        ? event.urlAfterRedirects == '/inicio'
          ? (this.isHome = true)
          : (this.isHome = false)
        : '';
    });

    this.logged = this.tokenService.isLogged();
    if (this.logged) {
      this.sessionService.SessionTimeOut();
    }
    console.log(this.isHomeStr.value);
    
  }
}
