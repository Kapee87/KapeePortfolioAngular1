import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get('password');
  }

  get Mail(){
    return this.form.get('email');
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }
onEnviar(event: Event){
event.preventDefault;
if (this.form.valid){

}else{
  this.form.markAllAsTouched();
}

}
}
