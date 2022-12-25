import { Etudiant } from 'src/model/etudiant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  universites : any;
  prenom! : string
  nom! : string
  telephone! : string
  age! : number
  universite! : string
  faculte! : string
  departement!: string
  niveau! : string
  etudiant! : Etudiant;
  facultes: any;
  niveaus : any;
  univ : any;
  etudiants! : Array<Etudiant>;
  constructor() { }

  ngOnInit(): void {
    this.universites = ["UCAD" ,"UABD","UASZ","SS"]
    this.univ = {
      'UCAD' : ["FST","FLSH"],
      "UABD" : ["FST","FLSH","Medecine"],
      "UASZ" : ["FST","FLSH","FASEG"],
      "SS" : ["FST","FLSH"]
    }
    this.facultes = {
      'FST' : ["MPI","PCSM","BGCS"],
      'FLSH' : ["Fracais","Anglais","Philosophie","Histoire","Geographie"]
    }
    this.niveaus = ["L1","L2","L3","M1","M2"]
    this.etudiants = [
      {
        "prenom" : "Massamba",
        "nom" : "Sow",
        "telephone" : "781001010",
        "age" : 22,
        "universite" : "UCAD",
        "faculte" : "FST",
        "departement" : "MPI",
        "niveau" : "L1"
      }
    ]
  }

  public submitOn(user : Object){
    this.etudiant = {
      "prenom" : this.prenom,
      "nom" : this.nom,
      "telephone" : this.telephone,
      "age" : this.age,
      "universite" : this.universite,
      "faculte" :this.faculte,
      "departement" : this.departement,
      "niveau" : this.niveau

    }
    console.log("etudiant",this.etudiant);
  }
}
