import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {WhoWeAre1Component} from "./pages/who-we-are1/who-we-are1.component";
import {WhoWeAre2Component} from "./pages/who-we-are2/who-we-are2.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'whoweare1', component: WhoWeAre1Component },
  { path: 'whoweare2', component: WhoWeAre2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
