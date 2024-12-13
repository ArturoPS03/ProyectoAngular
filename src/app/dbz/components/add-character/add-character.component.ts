import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',  //Identificación para el html
  templateUrl: './add-character.component.html', //Ruta html
  styleUrl: './add-character.component.css' //Ruta css
})

export class AddCharacterComponent {
 @Output() //Enviar los datos del nuevo personaje al componente padre
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //Modelo personaje vacio
    public character: Character = {
      name:'',
      power: 0
    };

  //Método para validar y emitir personaje
    emitCharacter():void{

      if (this.character.name.length === 0) return;

      this.onNewCharacter.emit(this.character);

      this.character={ name: '', power:0};

    }
}
