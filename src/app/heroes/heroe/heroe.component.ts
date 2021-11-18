import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})


export class HeroesComponent{

    nombre:string="Ironman";
    edad:number=45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
        this.nombre = "Spiderman";
    }

    cambiarEdad(){
        this.edad=30;
    }
}