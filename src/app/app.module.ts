import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SobreMiComponent } from './pages/about-me/sobre-mi.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { EditIconComponent } from './components/minicomponents/edit-icon/edit-icon.component';
import { SkillsComponent } from './components/minicomponents/skills/skills.component';

import { SpinnerComponent } from './components/minicomponents/spinner/spinner.component';
import { LoginComponent } from './pages/login/login.component';
import { ExperienciaLaboralComponent } from './pages/experience/experiencia-laboral.component';
import { EducacionComponent } from './pages/education/educacion.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ProyectosComponent } from './pages/projects/proyectos.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { EditaraboutComponent } from './pages/edit-about/editarabout.component';
import { DeleteIconComponent } from './components/minicomponents/delete-icon/delete-icon.component';
import { NewEdcucationComponent } from './pages/new-education/new-edcucation.component';
import { NewExperienceComponent } from './pages/new-experience/new-experience.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { NewSkillComponent } from './pages/new-skill/new-skill.component';
import { NewIconComponent } from './components/minicomponents/new-icon/new-icon.component';



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
    FooterComponent,
    EditaraboutComponent,
    DeleteIconComponent,
    NewEdcucationComponent,
    NewExperienceComponent,
    NewProjectComponent,
    NewSkillComponent,
    NewIconComponent,
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
