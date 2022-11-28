import { Component } from '@angular/core';
import { Paises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais.services.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor(private paisService:PaisServicesService) { }
  cadena:string = "";

  get results():Paises[]{
    return this.paisService.results
  }

  findPais(query:string):void{
    this.paisService.findPais(query)
  }

}
