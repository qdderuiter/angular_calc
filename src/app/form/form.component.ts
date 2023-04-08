import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor (private localStore: LocalStorageService) {
  }

  inkomen: number = 0;
  uitgaven_gezamenlijk: number = 0
  uitgaven_persoonlijk: number = 0
  aandelen: number = 0
  crypto: number = 0
  spaardoelen: number = 0
  resterendMaandBedrag: number = 0;


  saveToLocalStorage() {
    this.localStore.saveData('inkomen', JSON.stringify(this.inkomen))
    this.localStore.saveData('uitgaven_gezamenlijk', JSON.stringify(this.uitgaven_gezamenlijk))
    this.localStore.saveData('uitgaven_persoonlijk', JSON.stringify(this.uitgaven_persoonlijk))
    this.localStore.saveData('aandelen', JSON.stringify(this.aandelen))
    this.localStore.saveData('crypto', JSON.stringify(this.crypto))
    this.localStore.saveData('spaardoelen', JSON.stringify(this.spaardoelen))
    this.localStore.saveData('resterent_maandbedrag', JSON.stringify(this.resterendMaandBedrag))
  }
  
  berekenen() {
    this.resterendMaandBedrag = this.inkomen - this.uitgaven_gezamenlijk - this.uitgaven_persoonlijk - this.aandelen - this.crypto - this.spaardoelen;
    this.saveToLocalStorage();
    this.getValueFromLocalStorage()
}

  getValueFromLocalStorage() {
    this.localStore.getData('inkomen')
  }

}
