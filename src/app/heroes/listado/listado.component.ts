import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  futbol: string[] = ['Messi','Cristiano','Neymar','Podolski']; 

  futbolBorrado: string = '';

  borrarfutbol() {
    
    this.futbolBorrado = this.futbol.shift() || '';
    
  }


}
