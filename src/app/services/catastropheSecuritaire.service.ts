import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatastropheSecuritaire } from '../models/securitaire.model';

@Injectable({
    providedIn: 'root'
  })

  export class CatastropheSecuritaireService {
    constructor(private http:HttpClient) { }
    public readonly apiUrl:string="http://localhost:8013/apicatastrophesecuritaire";

    
getAllCatastropheSecuritaire(): Observable<CatastropheSecuritaire[]>{
    return this.http.get<CatastropheSecuritaire[]>(this.apiUrl);
  }

  getCatastropheSecuritaireById(id: number): Observable<CatastropheSecuritaire>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CatastropheSecuritaire>(url);
  }

  updateCatastropheSecuritaire(id: number, catastropheSecuritaire: CatastropheSecuritaire): Observable<CatastropheSecuritaire>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<CatastropheSecuritaire>(url, catastropheSecuritaire);
  }

  addCatastropheSecuritaire(catastropheSecuritaire: CatastropheSecuritaire): Observable<CatastropheSecuritaire>{
    return this.http.post<CatastropheSecuritaire>(this.apiUrl, catastropheSecuritaire);
  }

  deleteCatastropheSecuritaire(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }
  }

