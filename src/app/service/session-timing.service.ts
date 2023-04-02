import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SessionTimingService {
  sessionTimeOut: any;
  timeOutWarning: any;
  constructor(private router: Router) {}

  public SessionTimeOut() {
    this.sessionTimeOut = setTimeout(() => {
      sessionStorage.clear();
      clearInterval(this.sessionTimeOut);
      clearInterval(this.timeOutWarning);
      let res: any = false;
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
          this.router.navigateByUrl('/login', { skipLocationChange: false });
          return;
        } else if (result.isDismissed) {
          console.log('dismiss');
          this.router.navigateByUrl('/inicio');
          return;
        } else if (result.isDenied) {
          location.reload();
          return;
        }
      });
    }, 360000);

    this.timeOutWarning = setTimeout(() => {
      let timerInterval: string | number | undefined;
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
    }, 34000);
  }
  public extendSession() {
    clearTimeout(this.sessionTimeOut);
    clearTimeout(this.timeOutWarning);
    this.SessionTimeOut();
    Swal.fire('Tiempo de sesion extendido');
  }
}
