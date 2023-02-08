import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SessionTimingService } from './service/session-timing.service';
import { TokenServiceService } from './service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'KapeePortfolio';
  constructor(
    private sessionService: SessionTimingService,
    private tokenService: TokenServiceService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.isLogged()) {
      this.sessionService.SessionTimeOut();
    }
  }
}
