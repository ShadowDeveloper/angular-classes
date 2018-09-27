import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.styl']
})

export class MeuPrimeiroComponent implements OnInit {

  objetio = "Rodrigo";

  constructor() { }

  ngOnInit() {
  }

}
