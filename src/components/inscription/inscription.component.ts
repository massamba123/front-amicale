import { Etudiant } from 'src/model/etudiant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  prenom! : string
  nom! : string
  telephone! : string
  age! : number
  universite! : string
  faculte! : string
  departement!: string
  niveau! : string
  etudiant! :Etudiant
  universites : any;
  facultes: any;
  niveaus : any;
  univ : any;
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
  }

}
