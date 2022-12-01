import { Component } from '@angular/core';
import { Paises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais.services.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  constructor(private paisService:PaisServicesService) { }
  cadena:string = '';
  countries: Paises[] = []
  textError:string = ''
  error:boolean = false;


  // get results():Paises[]{
  //   return this.paisService.results
  // }

  findPais(){
    this.textError=this.cadena
    this.paisService.findPais(this.cadena)
    .subscribe({
      next:(resp) => {
        this.countries = resp
        this.error = false;
      },
      error: (error) => {
        this.error=true
        this.countries=[]
      }
    })
    this.cadena=''
  }

}
