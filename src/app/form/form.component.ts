import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  inkomen: number = 0
  uitgaven_gezamenlijk: number = 0
  uitgaven_persoonlijk: number = 0
  aandelen: number = 0
  crypto: number = 0
  totalSum: number = 0;
  berekenTotaal() {
  }
}
