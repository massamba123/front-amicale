import { UniversitesService } from './../../services/universites.service';
import { FaculteService } from './../../services/faculte.service';
import { DepartementService } from './../../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { Niveau } from 'src/model/niveau';
import { NiveauService } from 'src/services/niveau.service';
import { Departement } from 'src/model/departement';
import { Faculte } from 'src/model/faculte';
import { Universite } from 'src/model/universite';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {
  nomNiveau! : string
  idDepartement! : number
  idFaculte! : number
  idUniversite! : number
  niveau! : Niveau
  niveaus! : Array<Niveau>
  departements! : Array<Departement>
  facultes! : Array<Faculte>
  universites! : Array<Universite>
  hide : boolean = true

  constructor(public niveauService : NiveauService,
              public departementService : DepartementService,
              public faculteService : FaculteService,
              public universitesService: UniversitesService) { }

  ngOnInit(): void {
  }
  public ajouter(){
    this.niveau = {
      "id" : this.niveaus.length+1,
      "nomNiveau" : this.nomNiveau,
      "idDepartement" : this.idDepartement,
      "idFaculte" : this.idFaculte,
      "idUniversite" : this.idUniversite
    }
    this.hide = true
    this.niveauService.ajouterNiveau(this.niveau);
  }
  public supprimer(id:number){
    this.departementService.supprimer(id);
    this.niveaus = this.niveauService.getAllNiveau();
  }
   public add(){
    this.hide = false;
  }
}
