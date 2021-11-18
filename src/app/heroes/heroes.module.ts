import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroesComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        //Van todos los módulos
        
        CommonModule
    ]
})
export class HeroesModule{

}