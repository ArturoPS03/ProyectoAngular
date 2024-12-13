import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list', //Identificación para el html
  templateUrl: './list.component.html', //Ruta html
  styleUrl: './list.component.css' //Ruta css
})
export class ListComponent {

  //Decorador para recibir la lista desde el componente padre
@Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power: 10
  }]

//onDeleteId = Index value= number,

//Decorador para emitir eventos hacia el componente padre
@Output()
public onDelete: EventEmitter<number> = new EventEmitter();

//Método que emite el evento onDelete según el índice
onDeteteCharacter(index:number):void{
   this.onDelete.emit(index);
  }

}
