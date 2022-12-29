import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: BannerComponent },
  {path: 'dashboard', component: IntroComponent},
  { path: 'experiencia-laboral', component: ExperienciaLaboralComponent  },
  { path: 'educacion', component: EducacionComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
