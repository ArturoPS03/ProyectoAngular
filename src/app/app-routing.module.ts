import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; //Define las rutas (vacio)

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Aquí configura las rutas
  exports: [RouterModule] //Exportar para usarlo en otros módulos
})
export class AppRoutingModule { } //Define este módulo
