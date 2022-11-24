import { Injectable } from '@angular/core';
import { Paises } from '../interfaces/searchResponse.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {

  private _pais:string[]=[];
  private url: string = 'https://restcountries.com/v3.1/all'
  results: Paises[] = [];

  constructor() { }

  get pais():string[]{
    return [...this._pais]
  }
}
