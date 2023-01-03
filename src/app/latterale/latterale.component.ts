import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latterale',
  templateUrl: './latterale.component.html',
  styleUrls: ['./latterale.component.css']
})
export class LatteraleComponent implements OnInit {
  id! : number
  constructor() { }

  ngOnInit(): void {
    this.id = 1
  }

}
