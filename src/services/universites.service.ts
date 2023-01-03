import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Universite } from 'src/model/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversitesService {
  url : string = 'http//localhost:8080'
  universite! : Universite
  universites! : Array<Universite>

  constructor(private http :HttpClient) {
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
    this.http.post(this.url+'/universite',universite).subscribe((reponse) => {
      console.log(reponse);
    },
    (err) => {
      console.log(err);
    })
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
