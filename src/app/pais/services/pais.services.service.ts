import { Injectable } from '@angular/core';
import { Paises } from '../interfaces/searchResponse.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {
  private url: string = 'https://restcountries.com/v3.1/'

  constructor(private http: HttpClient) { 
  }

  // get pais():Paises[]{
  //   return [...this.results]
  // }

  findPais(query:string):Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.url}/name/${query}`)
    
  }

  country(code:string):Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.url}/alpha/${code}`)
  }

  findCapital(capital:string):Observable<Paises[]>{
    return this.http.get<Paises[]>(`${this.url}/capital/${capital}`)
  }

}
