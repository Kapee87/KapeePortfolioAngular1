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
      Swal.fire({
        title: 'Sesión expirada',
        html: 'Expiró la sesión, estás por ser redireccionado al Login',
        timer: 10000,
        showCancelButton: true,
        confirmButtonText: 'Ok, ir al login',
        timerProgressBar: true,
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/login', { skipLocationChange: false });
          } else {
            this.router.navigateByUrl('/', { skipLocationChange: false });
          }
        })
        .then(() => {
          this.router.navigateByUrl('/login', { skipLocationChange: false });
        });
    }, 300000);

    this.timeOutWarning = setTimeout(() => {
      let timerInterval: string | number | undefined;
      Swal.fire({
        title: 'Auto close alert!',
        html: 'En 1 minuto se cerrará la sesión de forma automática...',
        timer: 3000,
        timerProgressBar: true,
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
    }, 240000);
  }
  public extendSession() {
    clearTimeout(this.sessionTimeOut);
    clearTimeout(this.timeOutWarning);
  }
}
