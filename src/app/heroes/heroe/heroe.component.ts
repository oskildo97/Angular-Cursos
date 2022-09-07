import { Component } from "@angular/core";


@Component({
   selector: 'app-heroe',
   templateUrl: 'heroe.component.html',
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    eadad : number = 45

    get nombrecapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.eadad}`;

    }

    cambiarNombre(): void {
        this.nombre = 'spiderman'; 
    }

    cambiarEdad(): void {
        this.eadad = 20;
    }

}