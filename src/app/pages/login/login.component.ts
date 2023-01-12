import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User.model';
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

  constructor(
    private formBuilder: FormBuilder,
    private service: TokenServiceService
  ) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: [
        '',
        [Validators.required, Validators.minLength(5), Validators.email],
      ],
    });
  }

  ngOnInit(): void {}

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
  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
      this.user.email = this.Mail?.value;
      this.user.password = this.Password?.value;
      console.log(this.user)
      this.service.Login(this.user).subscribe((data) => {
        console.log(data);
       });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
