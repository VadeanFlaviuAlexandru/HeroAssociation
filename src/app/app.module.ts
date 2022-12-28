import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Angular's mechanism for communicating with a remote server over HTTP.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // mimics communication with a remote data server by using the In-memory Web API module.
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroDatabaseComponent } from './hero-database/hero-database.component';
import { AppRoutingModule } from './app-routing.module';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDatabaseComponent,
    EditHeroComponent,
    TopHeroesComponent,
    HeroSearchComponent,
    AddHeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
