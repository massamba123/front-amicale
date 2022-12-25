import { UniversitesService } from './../../services/universites.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/model/departement';
import { Faculte } from 'src/model/faculte';
import { Universite } from 'src/model/universite';
import { DepartementService } from 'src/services/departement.service';
import { FaculteService } from 'src/services/faculte.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  nomDepartement! : string
  idFaculte! : number
  hide : boolean = true
  idUniversite! : number
  departement! : Departement
  departements! : Array<Departement>
  facultes! : Array<Faculte>
  universites! : Array<Universite>
  constructor(public departementService : DepartementService,
              public faculteService : FaculteService,
              public universitesService: UniversitesService) { }

  ngOnInit(): void {
    this.universites = this.universitesService.getAllUniversite();
    this.facultes = this.faculteService.getAllFaculte();
  }
  public ajouter(){
    this.departement = {
      "id" : this.departements.length+1,
      "nomDepartement" : this.nomDepartement,
      "idFaculte" : this.idFaculte,
      "idUniversite" : this.idUniversite
    }
    this.hide = true
    this.departementService.ajouterDepartement(this.departement);
  }
  public supprimer(id:number){
    this.departementService.supprimer(id);
    this.departements = this.departementService.getAllDepartement();
  }
   public add(){
    this.hide = false;
  }

}
