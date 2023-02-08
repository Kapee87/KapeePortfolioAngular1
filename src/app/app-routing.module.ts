import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './components/intro/intro.component';

import { SkillsComponent } from './components/minicomponents/skills/skills.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { BannerComponent } from './pages/banner/banner.component';
import { EditaraboutComponent } from './pages/edit-about/editarabout.component';
import { EducacionComponent } from './pages/education/educacion.component';
import { ExperienciaLaboralComponent } from './pages/experience/experiencia-laboral.component';
import { LoginComponent } from './pages/login/login.component';
import { ProyectosComponent } from './pages/projects/proyectos.component';
import { SobreMiComponent } from './pages/about-me/sobre-mi.component';
import { NewEdcucationComponent } from './pages/new-education/new-edcucation.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { NewExperienceComponent } from './pages/new-experience/new-experience.component';
import { NewSkillComponent } from './pages/new-skill/new-skill.component';

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
  { path: 'nuevaEducacion', component: NewEdcucationComponent },
  { path: 'nuevaExperiencia', component: NewExperienceComponent },
  { path: 'nuevoProyecto', component: NewProjectComponent },
  { path: 'newSkill', component: NewSkillComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
