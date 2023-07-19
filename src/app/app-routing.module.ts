import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path:'register',component:RegisterComponent, },
  { path:'home', component:HomeComponent, },
  { path:'precios', component:PreciosComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  { path:'protegida', component:ProtegidaComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register']))},
  {path: '', pathMatch:'full', redirectTo:'/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
