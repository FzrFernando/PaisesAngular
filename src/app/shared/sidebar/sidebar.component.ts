import { Component } from '@angular/core';
import { PaisServicesService } from 'src/app/pais/services/pais.services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private paisService:PaisServicesService) { }

  get pais():string[]{
    return this.paisService.pais;
  }
}
