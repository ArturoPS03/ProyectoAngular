import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({
  selector: 'app-dbz-main-page', //Identificación para el html
  templateUrl: './main-page.component.html' //Ruta hacia el html
})

export class MainPageComponent {

  public characters: Character[] = [{ //Lista personajes
    name: 'Krillin', //Cada uno con su nombre
    power: 1000 //y su poder
  },{
    name:'Goku',
    power: 9500
  },{
    name:"Vegeta",
    power: 7500
  }];

 // onDelete = Index value: number;

 //Método para agregar personajes
  onNewCharacter(character:Character): void{
    this.characters.push(character);
  }

  //Método para eliminar personajes
  onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    this.characters.splice(index,1); //Elimina personaje en posición seleccionada
  }

}
