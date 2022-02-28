import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'cars';

  constructor(
    public http: HttpClient,
  ) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(entity: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}${this.entityName}`, entity);
  }

  update(entity: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.apiUrl}${this.entityName}/${entity.id}`,
      entity
    );
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.apiUrl}${this.entityName}/${id}`);
  }

}
