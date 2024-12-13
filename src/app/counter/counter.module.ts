import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component"


@NgModule({
  declarations: [
    CounterComponent //Declaración componente para que sea parte de este módulo
  ],
  exports: [
    CounterComponent //Exportar para que sea accesible a los demás módulos
  ]


})
export class CounterModule{ //Definición módulo

}
