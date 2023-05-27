import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  inkomen: number = 0;
  uitgaven_gezamenlijk: number = 0;
  uitgaven_persoonlijk: number = 0;
  aandelen: number = 0;
  crypto: number = 0;
  spaardoelen: number = 0;
  resterendMaandBedrag: number = 0;

  totaalUitgaven: Array<number> = [];

  berekenen() {
    this.totaalUitgaven = [
      this.uitgaven_gezamenlijk,
      this.uitgaven_persoonlijk,
      this.aandelen,
      this.crypto,
      this.spaardoelen,
    ];

    this.resterendMaandBedrag =
      this.resterendMaandBedrag = this.inkomen - this.totaalUitgaven.reduce((acc, val) => acc + val, 0)
  }
}
