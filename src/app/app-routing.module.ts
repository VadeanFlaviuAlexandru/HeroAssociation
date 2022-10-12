import { NgModule } from '@angular/core';
import { HeroDatabaseComponent } from './hero-database/hero-database.component';
import { RouterModule, Routes } from '@angular/router';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

const routes: Routes=[
  {path: 'database', component: HeroDatabaseComponent},
  {path: 'top', component: TopHeroesComponent},
  {path: 'detail/:id', component: EditHeroComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: "dashboard", pathMatch: 'full'},
  {path: 'Form', component: AddHeroComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
