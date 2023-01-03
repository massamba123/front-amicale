import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nomUser : string = "massamba sow"
  boolUniversite : boolean = false
  boolDepartement : boolean = false
  boolFaculte : boolean = false
  boolNiveau : boolean = false
  boolPoste : boolean = false

  constructor() { }

  ngOnInit(): void {
    this.boolDepartement = false
  }
  public univ(){
    this.boolUniversite = true;
    this.boolDepartement = false
    this.boolFaculte = false
    this.boolNiveau = false
    this.boolPoste = false
    console.log(this.boolUniversite)
  }
  public depart(){
    this.boolDepartement = true
    this.boolUniversite = false;
    this.boolFaculte = false
    this.boolNiveau = false
    this.boolPoste = false
    console.log(this.boolUniversite)
  }
  public facul(){
    this.boolFaculte = true
    this.boolUniversite = false;
    this.boolDepartement = false
    this.boolNiveau = false
    this.boolPoste = false
    console.log(this.boolUniversite)
  }
  public niv(){
    this.boolNiveau = true
    this.boolUniversite = false;
    this.boolDepartement = false
    this.boolFaculte = false
    this.boolPoste = false

    console.log(this.boolUniversite)
  }
  public post(){
    this.boolPoste = true
    this.boolNiveau = false
    this.boolUniversite = false;
    this.boolDepartement = false
    this.boolFaculte = false
  }
}
