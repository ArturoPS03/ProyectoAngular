import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [ //Declaraciones
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [ //Exportación del componente principal, para usarlo externamente
    MainPageComponent,
  ],
  imports: [ //Importaciones
    CommonModule, //funcionalidades básicas de Angular
    FormsModule, //trabajar con formularios y plantillas
  ]
})
export class DbzModule { } //Definición módulo dbz
