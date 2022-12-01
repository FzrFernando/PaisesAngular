import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais.services.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent implements OnInit {

  constructor(private paisService : PaisServicesService) { }
  cadena:string = '';
  countries: Paises[] = []
  textError:string = ''
  error:boolean = false;

  ngOnInit(): void {
  }

  findRegion(){
    this.textError=this.cadena
    this.paisService.findRegion(this.cadena)
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
