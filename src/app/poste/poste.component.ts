import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  id! : number;
  constructor() { }

  ngOnInit(): void {
    this.id = 0
  }

}
