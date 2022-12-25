import { UniversitesService } from './../../services/universites.service';
import { FaculteService } from './../../services/faculte.service';
import { Faculte } from './../../model/faculte';
import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/model/universite';

@Component({
  selector: 'app-faculte',
  templateUrl: './faculte.component.html',
  styleUrls: ['./faculte.component.css']
})
export class FaculteComponent implements OnInit {
  faculte! : Faculte
  nomFaculte!:  string
  hide : boolean = true
  universites! : Array<Universite>
  idUniversite! : number
  facultes! : Array<Faculte>
  constructor(public faculteService : FaculteService,public universiteServices : UniversitesService) { }

  ngOnInit(): void {
    this.universites = this.universiteServices.getAllUniversite();
  }

  public ajouter(){
    this.faculte = {
      "id" : this.facultes.length+1,
      "nomFaculte" : this.nomFaculte,
      "idUniversite" : this.idUniversite
    }
    this.hide = true
    this.faculteService.ajouterFaculte(this.faculte);
  }
  public supprimer(id:number){
    this.faculteService.supprimer(id);
    this.facultes = this.faculteService.getAllFaculte();
  }
   public add(){
    this.hide = false;
  }
}
