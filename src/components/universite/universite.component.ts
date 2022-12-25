import { UniversitesService } from './../../services/universites.service';
import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/model/universite';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universite! : Universite;
  hide : boolean = true;
  nomUniversite! : string;
  universites! : Array<Universite>;
  constructor(public universitesService:UniversitesService) { }

  ngOnInit(): void {
    this.universites = this.universitesService.getAllUniversite();
  }
  public ajouter(){
    this.universite = {
      "id" : this.universites.length+1,
      "nomUniversite" : this.nomUniversite
    }
    this.hide = true
    this.universitesService.ajouterUniversite(this.universite);
  }
  public supprimer(id:number){
    this.universitesService.supprimer(id);
    this.universites = this.universitesService.getAllUniversite();
  }
   public add(){
    this.hide = false;
  }
}
