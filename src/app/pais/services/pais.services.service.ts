import { Injectable } from '@angular/core';
import { Paises } from '../interfaces/searchResponse.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {
  private url: string = 'https://restcountries.com/v3.1/'
  results: Paises[] = [];
  termino = '';

  constructor(private http: HttpClient) { 
  }

  get pais():Paises[]{
    return [...this.results]
  }

  findPais(query:string):void{
    this.http.get<Paises[]>(`${this.url}/name/${query}`)
    .subscribe((resp) => this.results = resp)
  }

}
