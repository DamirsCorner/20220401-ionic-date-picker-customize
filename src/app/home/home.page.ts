import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonDatetime, { static: true }) datePicker: IonDatetime;

  date: Date;

  constructor() {}

  cancel() {
    this.datePicker.cancel();
  }

  done() {
    this.datePicker.confirm();
  }
}
