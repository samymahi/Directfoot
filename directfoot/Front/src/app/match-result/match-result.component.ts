import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'
import { Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})

export class MatchResultComponent implements OnInit {

  readonly ROOT_URL = "https://v3.football.api-sports.io"

  constructor(  public datepipe: DatePipe, private router: Router) {
    
  }
  @Input() data!:any;
  
  homeLogo = "https://media.api-sports.io/football/teams/9244.png"
  homeName = "no_data"
  homeScore = "-"
  homeId = ""

  awayLogo = "https://media.api-sports.io/football/teams/9244.png"
  awayName = "no_data"
  awayScore = "-"
  awayId = ""

  elapsed= "-";
  statut = "no_data"
  id = ""
  leagueID = ""
  season = ""


  ngOnInit(): void {
    this.parseData();
  } 


  /**
   * Parser les donnees recu dans le input
   */
  parseData(){
    if(this.data != null){
      this.homeLogo = this.data.teams.home.logo
      this.homeName = this.data.teams.home.name
      this.homeScore = this.data.goals.home
      this.homeId = this.data.teams.home.id

      this.awayLogo = this.data.teams.away.logo
      this.awayName = this.data.teams.away.name
      this.awayScore = this.data.goals.away
      this.awayId = this.data.teams.away.id
      
      this.statut = this.data.fixture.status.long
      this.elapsed = this.data.fixture.status.elapsed
      this.id = this.data.fixture.id.toString()
      this.leagueID = this.data.league.id
      this.season = this.data.league.season

      if (this.statut == "Match Finished") {
        this.statut = "Terminé"
        this.elapsed = this.datepipe.transform(this.data.fixture.date, 'dd/MM/yy') || ""
      } else if (this.statut == "Not Started") {
        this.statut = "À Venir"
        this.elapsed = this.datepipe.transform(this.data.fixture.date, 'dd/MM/yy') || ""
      } else if (this.statut == "Time to be defined") {
        this.statut = "À Définir"
        this.elapsed = "-"
      } else {
        this.elapsed += "\"";
      }
    }
  }

  goToStat(){
    const navigationDetails: string[] = ['match-detail'];
    this.router.navigate(navigationDetails);
  }
  
  
}
