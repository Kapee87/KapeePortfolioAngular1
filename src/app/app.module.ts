import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { EditIconComponent } from './components/minicomponents/edit-icon/edit-icon.component';
import { SkillsComponent } from './components/minicomponents/skills/skills.component';

import { SpinnerComponent } from './components/minicomponents/spinner/spinner.component';
import { LoginComponent } from './pages/login/login.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';


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
    ProyectosComponent,
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
