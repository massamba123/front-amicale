import { Injectable } from '@angular/core';
import { Niveau } from 'src/model/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  niveau! : Niveau
  niveaus! : Array<Niveau>
  constructor() { }
  public ajouterNiveau(niveau:Niveau){
    this.niveaus.push(niveau);
  }
  public getNiveau(id: number) {
    return this.niveaus.filter(univer=>univer.id == id);
  }
  public getAllNiveau() : Array<Niveau>{
    return this.niveaus;
  }
  public supprimer(id:number){
    this.niveaus = this.niveaus.filter(univer=>univer.id != id);
  }
}
