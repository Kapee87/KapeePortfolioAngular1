import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  userLogged = true;

  constructor(private service: TokenServiceService) {}

  ngOnInit(): void {
    this.userLogged = this.service.isLogged();
    // console.log(this.service.getToken());
  }
}
