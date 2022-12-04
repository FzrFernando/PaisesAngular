import { Component, OnInit } from '@angular/core';
import { PaisServicesService } from '../../../services/pais.services.service';
import { Paises } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
countries:Paises[]=[];
error:boolean=false;
textError:string="";
  constructor(private paisServicio:PaisServicesService) { }

  ngOnInit(): void {
  }
buscarCapital(capital:string){
    this.paisServicio.searchCapital(capital)
    .subscribe({
      next:(resp)=>{
        this.countries=resp
        this.error=false
      },
      error:(error)=>{this.countries=[]
      this.error=true
      this.textError=capital
      },
      
    })
}
}
