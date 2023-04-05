import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  inkomen = 0
  uitgaven_gezamenlijk = 0
  uitgaven_persoonlijk = 0
  aandelen = 0
  crypto = 0
  berekenTotaal() {
    
  }
}
