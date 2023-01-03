import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id! : number

  constructor() { }

  ngOnInit(): void {
    this.id = 1
  }

}
