import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { SessionTimingService } from 'src/app/service/session-timing.service';
import { TokenServiceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user: User = {
    email: '',
    password: '',
  };
  token: any = {
    token: '',
  };
  varclass = true;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenServiceService,
    private sessionService: SessionTimingService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [Validators.required, Validators.minLength(5), Validators.email],
      ],
    });
  }

  ngOnInit(): void {
    this.isVisible();
  }

  get Password() {
    return this.form.get('password');
  }

  get Mail() {
    return this.form.get('email');
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
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

    if (this.form.valid) {
      this.user.email = this.Mail?.value;
      this.user.password = this.Password?.value;
      this.tokenService.Login(this.user).subscribe((data) => {
        this.token = data;
        sessionStorage.setItem('token', this.token.accessToken);
        this.isVisible();
        this.sessionService.SessionTimeOut();
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
