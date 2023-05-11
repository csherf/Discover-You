import { Component } from '@angular/core';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  mNotePth = "../../assets/musicNoteOrange.svg"
  constructor() {}

  discover(genre: string) {
    console.log(genre)
  }
}
