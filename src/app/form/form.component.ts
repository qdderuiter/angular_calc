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

  ngOnInit(): void {
    this.getValuesFromLocalStorage();
  }

  inkomen: number = 0;
  uitgaven_gezamenlijk: number = 0
  uitgaven_persoonlijk: number = 0
  aandelen: number = 0
  crypto: number = 0
  spaardoelen: number = 0
  resterendMaandBedrag: number = 0;

  getValuesFromLocalStorage(){
    this.inkomen = Number(this.localStore.getData('inkomen'))
    this.uitgaven_gezamenlijk = Number(this.localStore.getData('uitgaven_gezamenlijk'))
    this.uitgaven_persoonlijk = Number(this.localStore.getData('uitgaven_persoonlijk'))
    this.aandelen = Number(this.localStore.getData('aandelen'))
    this.crypto = Number(this.localStore.getData('crypto'))
    this.spaardoelen = Number(this.localStore.getData('spaardoelen'))
    this.resterendMaandBedrag = Number(this.localStore.getData('resterent_maandbedrag'))
  }

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
    this.getValuesFromLocalStorage()
}

}
