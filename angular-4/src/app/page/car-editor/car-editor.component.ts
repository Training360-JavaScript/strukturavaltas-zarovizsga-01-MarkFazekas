import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  carObject?: Car;
  edit: boolean = true;

  modelPattern = /^([A-Z])([\w\d\s]){1,14}$/;
  makePattern = /^([A-Z])([\w]){2,19}$/;
  yearPattern = /^([\d])+$/;
  pricePattern = /^([\d]){3,5}$/;
  stockPattern = /^([1-9]|[1234][0-9]|50)$/;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => this.carService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.carObject = new Car();
        } else {
          this.carObject = currentObject
        }
      }
    )
  }

  onUpdate(editedObject: Car) {
    const crudObservable: Observable<any> = this.edit ? this.carService.update(editedObject) : this.carService.create(editedObject);
    crudObservable.subscribe(
      result => {
        this.router.navigate(["car"])
      }
    )
  }
}
