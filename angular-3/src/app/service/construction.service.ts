import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Construction} from "../model/construction";

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'constructions';

  constructor(
    public http: HttpClient,
  ) {
  }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(entity: Construction): Observable<Construction> {
    return this.http.post<Construction>(`${this.apiUrl}${this.entityName}`, entity);
  }

  update(entity: Construction): Observable<Construction> {
    return this.http.patch<Construction>(
      `${this.apiUrl}${this.entityName}/${entity.id}`,
      entity
    );
  }

  delete(id: number): Observable<Construction> {
    return this.http.delete<Construction>(`${this.apiUrl}${this.entityName}/${id}`);
  }

}
