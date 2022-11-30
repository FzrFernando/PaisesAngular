import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais.services.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
  pais:any;
  code:string=''
  constructor(private paisServices: PaisServicesService, private activeRoute:ActivatedRoute) { 
    
  }

  ngOnInit():void{
    this.code=this.activeRoute.snapshot.params['id'];
    this.paisServices.country(this.code)
    .subscribe({
      next: (resp) => {this.pais = resp[0]},
      error: (error) => console.log(error)
    })
  }

  // get pais():Paises{
  //   this.paisServices.country(this.code)
  //   .subscribe({
  //     next: (resp) => {return resp[0]},
  //     error: (error) => console.log(error)
  //   })
  //   return
  // }

}
