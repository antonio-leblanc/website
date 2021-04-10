import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    // children: [
      // {path: 'map', component: MapComponent},
      // {path: 'manager', component: ManagerComponent, data: {roles: [0, 20]}},
      // {path: 'meteorologia', component: MeteoComponent},
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
