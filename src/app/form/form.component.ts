import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inkomen: number = 0;
  uitgaven_gezamenlijk: number = 0
  uitgaven_persoonlijk: number = 0
  aandelen: number = 0
  crypto: number = 0
  spaardoelen: number = 0
  calculateTotal: number = 0;
  showTotalSum: number = 0;
  limitDecimals(value: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.floor(value * factor) / factor;
  }
  berekenTotaal() {
    this.calculateTotal =   this.inkomen - this.uitgaven_gezamenlijk - this.uitgaven_persoonlijk - this.aandelen - this.crypto - this.spaardoelen
    this.showTotalSum = this.limitDecimals(this.calculateTotal, 2)
  }
}
