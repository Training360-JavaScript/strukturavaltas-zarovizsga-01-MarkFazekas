import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Drug} from "../model/drug";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'drugs';

  constructor(
    public http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${this.apiUrl}${this.entityName}`);
  }
}
