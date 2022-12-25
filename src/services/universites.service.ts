import { Injectable } from '@angular/core';
import { Universite } from 'src/model/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversitesService {
  universite! : Universite
  universites! : Array<Universite>

  constructor() {
    this.universites = [
      {
        "id" : 1,
        "nomUniversite" :"UCAD"
      },
      {
        "id" : 2,
        "nomUniversite" : "UGB"
      },
      {
        "id" : 3,
        "nomUniversite" : "SS"
      },
      {
        "id" : 4,
        "nomUniversite" : "UABD"
      },
      {
        "id" : 5,
        "nomUniversite" : "UASZ"
      }
];
  }
  public ajouterUniversite(universite:Universite){
    this.universites.push(universite);
  }
  public getUniversite(id: number) {
    return this.universites.filter(univer=>univer.id == id);
  }
  public getAllUniversite() : Array<Universite>{
    return this.universites;
  }
  public supprimer(id:number){
    this.universites = this.universites.filter(univer=>univer.id != id);
  }
}
