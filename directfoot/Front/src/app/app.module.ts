import { ChangeDetectorRef, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchResultComponent } from './match-result/match-result.component';
import { LigueResultComponent } from './ligue-result/ligue-result.component';
import { LigueCellComponent } from './ligue-cell/ligue-cell.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { SearchComponent } from './search/search.component';
import { LigueAccueilComponent } from './ligue-accueil/ligue-accueil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DatePipe } from '@angular/common';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { LigueDetailComponent } from './ligue-detail/ligue-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MatchResultComponent,
    LigueResultComponent,
    LigueCellComponent,
    MatchDetailComponent,
    SearchComponent,
    LigueAccueilComponent,
    AccueilComponent,
    TeamDetailComponent,
    LigueDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
