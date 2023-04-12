import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, interval, timer } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SessionTimingService {
  private timer: any;
  private timeFrame: any;
  private sessionTime = 300;
  private remainingTime$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private router: Router) {}

  public showRemaining(): BehaviorSubject<string> {
    const minutes = Math.floor(this.sessionTime / 60);
    let tempSecs = this.sessionTime % 60;
    const seconds = tempSecs < 10 ? '0' + tempSecs : tempSecs;
    const remainingTime = '0' + minutes + ' : ' + seconds;
    this.remainingTime$.next(remainingTime);
    return this.remainingTime$;
  }

  public sessionEnd(): void {
    sessionStorage.clear();
    this.sessionTime = 0;
    this.remainingTime$ = new BehaviorSubject('');
    Swal.fire({
      title: 'Sesión expirada',
      html: 'Expiró la sesión, estás por ser redireccionado al inicio',
      timer: 10000,
      showDenyButton: true,
      confirmButtonText: 'Ok, ir al login',
      timerProgressBar: true,
    }).then((result) => {
      this.router.url === '/login' ? location.reload : '';
      if (result.isConfirmed) {
        console.log('is confirmed');
        // this.router.navigateByUrl('/login', { skipLocationChange: false });
        location.replace('/login');
        return;
      } else if (result.isDismissed) {
        console.log('dismiss');
        // this.router.navigateByUrl('/inicio', { skipLocationChange: false });
        location.replace('/inicio');
        return;
      } else if (result.isDenied) {
        location.reload();
        return;
      }
    });
  }

  public SessionTimeOut() {
    this.sessionTime =
      Number(sessionStorage.getItem('sessionTime')) || this.sessionTime;
     this.timer = setTimeout(() => {
      this.sessionEnd();
      console.log(this.sessionTime);
    }, this.sessionTime * 1000);
     this.timeFrame = setInterval(() => {
      this.sessionTime--;
      this.showRemaining();
      sessionStorage.setItem('sessionTime', this.sessionTime.toString());
      if (this.sessionTime <= 0) {
        clearInterval(this.timeFrame);
        clearTimeout(this.timer);
      } else if (this.sessionTime < 60 && this.sessionTime > 58) {
        Swal.fire({
          title: 'Auto close alert!',
          html: 'En menos de 1 minuto se cerrará la sesión de forma automática...',
          timer: 3000,
          timerProgressBar: true,
          confirmButtonText: 'ok',
          denyButtonText: 'extender sesión',
          showDenyButton: true,
        }).then((result) => {
          if (result.isDenied) {
            this.extendSession();
          }
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
        });
      }
    }, 1000);
  }
  public extendSession() {
    clearInterval(this.timeFrame);
    clearTimeout(this.timer);
    sessionStorage.setItem('sessionTime', '300');
    this.SessionTimeOut();
    Swal.fire('Tiempo de sesion extendido');
  }
}
