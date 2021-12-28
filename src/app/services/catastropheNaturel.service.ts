import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatastropheNaturelle } from '../models/naturel.model';

@Injectable({
    providedIn: 'root'
  })

  export class CatastropheNaturelleService {
    constructor(private http:HttpClient) { }
    public readonly apiUrl:string="http://localhost:8013/apicatastrophenaurelle";

    
getAllCatastropheNaturelle(): Observable<CatastropheNaturelle[]>{
    return this.http.get<CatastropheNaturelle[]>(this.apiUrl);
  }

  getCatastropheNaturelleById(id: number): Observable<CatastropheNaturelle>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CatastropheNaturelle>(url);
  }

  updateCatastropheNaturelle(id: number, catastropheNaturelle: CatastropheNaturelle): Observable<CatastropheNaturelle>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<CatastropheNaturelle>(url, catastropheNaturelle);
  }

  addCatastropheNaturelle(catastropheNaturelle: CatastropheNaturelle): Observable<CatastropheNaturelle>{
    return this.http.post<CatastropheNaturelle>(this.apiUrl, catastropheNaturelle);
  }

  deleteCatastropheNaturelle(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }
  }

