import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './components/intro/intro.component';

import { SkillsComponent } from './components/minicomponents/skills/skills.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { BannerComponent } from './pages/banner/banner.component';
import { EditaraboutComponent } from './pages/editarabout/editarabout/editarabout.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { LoginComponent } from './pages/login/login.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: BannerComponent },
  { path: 'dashboard', component: IntroComponent },
  { path: 'experiencia-laboral', component: ExperienciaLaboralComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'login', component: LoginComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'editarSobreMi', component: EditaraboutComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
