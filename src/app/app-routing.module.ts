import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './components/banner/banner.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio', component: BannerComponent},
  {path: 'introduccion', component: IntroComponent},
  {path:'login', component: LoginComponent},
  {path:'**', component:NotFound404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
