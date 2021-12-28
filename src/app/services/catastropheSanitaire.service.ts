import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatastropheSanitaire } from '../models/sanitaire.model';

@Injectable({
    providedIn: 'root'
  })

  export class CatastropheSanitaireService {
    constructor(private http:HttpClient) { }
    public readonly apiUrl:string="http://localhost:8013/apicatastrophesanitaire";

    
getAllCatastropheSanitaire(): Observable<CatastropheSanitaire[]>{
    return this.http.get<CatastropheSanitaire[]>(this.apiUrl);
  }

  getCatastropheSanitaireById(id: number): Observable<CatastropheSanitaire>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CatastropheSanitaire>(url);
  }

  updateCatastropheSanitaire(id: number, catastropheSanitaire: CatastropheSanitaire): Observable<CatastropheSanitaire>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<CatastropheSanitaire>(url, catastropheSanitaire);
  }

  addCatastropheSanitaire(catastropheSanitaire: CatastropheSanitaire): Observable<CatastropheSanitaire>{
    return this.http.post<CatastropheSanitaire>(this.apiUrl, catastropheSanitaire);
  }

  deleteCatastropheSanitaire(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }
  }

