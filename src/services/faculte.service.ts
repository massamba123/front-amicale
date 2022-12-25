import { Injectable } from '@angular/core';
import { Faculte } from 'src/model/faculte';

@Injectable({
  providedIn: 'root'
})
export class FaculteService {
  facultes! : Array<Faculte>
  constructor() { }
  public ajouterFaculte(Faculte:Faculte){
    this.facultes.push(Faculte);
  }
  public getFaculte(id: number) {
    return this.facultes.filter(univer=>univer.id == id);
  }
  public getAllFaculte() : Array<Faculte>{
    return this.facultes;
  }
  public supprimer(id:number){
    this.facultes = this.facultes.filter(univer=>univer.id != id);
  }
}
