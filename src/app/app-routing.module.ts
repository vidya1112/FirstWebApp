import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutusComponent} from '../app/aboutus/aboutus.component';
import{AccessoriesComponent}from '../app/accessories/accessories.component';
import{CamerasComponent}from '../app/cameras/cameras.component';
import{LaptopsComponent}from '../app/laptops/laptops.component';
import{SmartphoneComponent}from '../app/smartphone/smartphone.component';
import{HomeComponent}from '../app/home/home.component';
import{LoginComponent}from '../app/login/login.component';
  import { from } from 'rxjs';

const routes: Routes = [{path:"**",component:HomeComponent},{path:"login",component:LoginComponent},{path:"Accessories",component:AccessoriesComponent},
{path:"Cameras",component:CamerasComponent},
{path:"Laptops",component:LaptopsComponent},{path:"Samartphone",component:SmartphoneComponent},
{path:"Aboutus",component:AboutusComponent}];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
