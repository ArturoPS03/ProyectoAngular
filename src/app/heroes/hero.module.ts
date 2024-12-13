import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations: [ //Declarar componentes en este módulo
    HeroComponent,
    ListComponent
  ],
  exports: [ //Exportar Components para usarlos en módulos externos
    HeroComponent,
    ListComponent,
  ],
  imports: [ //Importar CommonModule (Directivas y funcionalidades como ngIf)
    CommonModule
  ]
})

//Definir y exportar HeroModule
export class HeroModule{
}
