import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule} from '@angular/common/http';
import { EditIconComponent } from './components/minicomponents/edit-icon/edit-icon.component';
import { SkillsComponent } from './components/minicomponents/skills/skills.component';
import { BannerComponent } from './components/banner/banner.component';
import { SpinnerComponent } from './components/minicomponents/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    NotFound404Component,
    SobreMiComponent,
    LoginComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    EditIconComponent,
    SkillsComponent,
    BannerComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
