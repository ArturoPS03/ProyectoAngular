import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero', //Identificación para el html
  templateUrl: './hero.component.html', //Ruta del html
  styleUrl: './hero.component.css' //Ruta del css
})
export class HeroComponent {
//Definición de las propiedades del componente
public name: string = 'ironman';
public age: number = 45;

//Devuelve el nombre en mayusculas
get capitalizadName():string{
  return this.name.toUpperCase();
}

//Método que devuelve nombre y edad
getHeroDescription():String{

  return `${ this.name } - ${ this.age }`;
}

//Método para cambiar el nombre a Spiderman
changeHero():void{
 this.name= 'Spiderman';
}

//Método para cambiar la edad a 25
changeAge():void{

  this.age = 25;

}

//Método para devolver los valores antiguos
resetFrom():void{
this.name = 'ironman';
this.age = 45;

/*document.querySelectorAll('h1')!.forEach(element =>{
  element.innerHTML = '<h1>Desde Angular</h1>'
})*/
}

}

