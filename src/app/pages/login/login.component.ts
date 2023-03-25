import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { SessionTimingService } from 'src/app/service/session-timing.service';
import { TokenServiceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User = {
    nombreUsuario: '',
    password: '',
  };
  token: any = {};
  varclass = true;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenServiceService,
    private sessionService: SessionTimingService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.isVisible();
  }

  get Password() {
    return this.form.get('password');
  }

  get Name() {
    return this.form.get('nombreUsuario');
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }
  get NameValid() {
    return this.Name?.touched;
  }
  isVisible() {
    if (this.tokenService.isLogged()) {
      this.varclass = true;
    } else {
      this.varclass = false;
    }
  }

  onEnviar(event: Event) {
    event.preventDefault;
    // console.log(this.form.valid);

    if (this.form.valid) {
      this.user.nombreUsuario = this.Name?.value;
      this.user.password = this.Password?.value;
      this.tokenService.Login(this.user).subscribe((data) => {
        this.token = data;
        // console.log(this.token.token);
        sessionStorage.setItem('token', this.token.token);
        this.isVisible();
        this.sessionService.SessionTimeOut();
        Swal.fire('Sesión iniciada', 'Bienvenid@', 'success');
        this.router.navigateByUrl('/');
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCloseSession() {
    sessionStorage.clear();
    this.isVisible();
  }
  extendSession() {
    this.sessionService.extendSession();
  }
}
