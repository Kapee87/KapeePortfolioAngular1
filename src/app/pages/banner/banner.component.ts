import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { IsHomeService } from 'src/app/service/is-home.service';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  userLogged = true;
  scroll = document.querySelector('.home');
  public isHomeStr = this.isHome.getIsHome();

  constructor(
    private service: TokenServiceService,
    private router: Router,
    public isHome: IsHomeService
  ) {}

  scrollEvent() {
    console.log('algo');
  }
  ngOnInit(): void {
    this.userLogged = this.service.isLogged();
    this.isHomeStr.next('true');
  }
  showHeader() {
    this.isHome.getIsHome().value === 'true'
      ? this.isHome.setFalse()
      : this.isHome.setTrue();
  }

  @HostListener('window:wheel', ['$event'])
  onScroll(event: any) {
    if (event.deltaY > 0) {
      this.router.navigateByUrl('/sobre-mi');
    }
    if (window.pageYOffset < 10) {
      // ajusta el valor según tus necesidades
      this.isHome.setTrue();
    }
  }
}
