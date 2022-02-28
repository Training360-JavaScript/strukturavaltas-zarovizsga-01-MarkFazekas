import { Component } from '@angular/core';
// import {DrugService} from "./service/drug.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';

  // constructor(drugService: DrugService) {
  //   drugService.getAll().subscribe(result => console.log(result))
  // }
}
