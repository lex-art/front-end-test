import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public env: boolean = environment.production;

  constructor() { }

  ngOnInit(): void {
  }

}
