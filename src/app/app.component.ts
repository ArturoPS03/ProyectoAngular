import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root', //Identificación para el html
  templateUrl: './app.component.html', //Ruta del html
  styleUrl: './app.component.css' //Ruta del css
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  /*public counter = 10;

 increaseBy(value: number):void{
    this.counter += value;
  }

  decrementBy(value: number):void{
    this.counter -= value;
  }

  //hacer método para resetear el counter a 10

  reset(): void{
    this.counter =10;

  }*/
}
