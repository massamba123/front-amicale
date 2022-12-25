import { Injectable } from '@angular/core';
import { Departement } from 'src/model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  departement! : Departement;
  departements! : Array<Departement>

  constructor() { }
  public ajouterDepartement(departement:Departement){
    this.departements.push(departement);
  }
  public getDepartement(id: number) {
    return this.departements.filter(univer=>univer.id == id);
  }
  public getAllDepartement() : Array<Departement>{
    return this.departements;
  }
  public supprimer(id:number){
    this.departements = this.departements.filter(univer=>univer.id != id);
  }
}
