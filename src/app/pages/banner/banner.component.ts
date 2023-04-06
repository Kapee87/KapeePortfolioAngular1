import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private service: TokenServiceService, private router: Router) {}

  userLogged = true;
  scroll = document.querySelector('.home');

  scrollEvent() {
    console.log('algo');
  }
  ngOnInit(): void {
    this.userLogged = this.service.isLogged();
    // console.log(this.service.getToken());
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: any) {
    if (event.deltaY > 0) {
      this.router.navigateByUrl('/sobre-mi');
      
    }
  }
}
