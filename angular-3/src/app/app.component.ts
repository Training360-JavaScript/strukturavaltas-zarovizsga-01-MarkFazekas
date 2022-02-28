import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Construction} from "./model/construction";
import {ConstructionService} from "./service/construction.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  list$: Observable<Construction[]> = this.constructionService.getAll();

  constructor(private constructionService: ConstructionService) {
  }

  onDelete(item: Construction){
    this.constructionService.delete(item.id).subscribe(() => {
        this.list$ = this.constructionService.getAll()
      }
    );
  }
}
