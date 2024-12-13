import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter', //Identificación para el html

  //Las ticks me permiten hacer un stream multilinea
  // Y poder trabajar este template como si fuiera la parte del HTML
  template:  `
            <h3>
  Counter:{{ counter }} <!-- Mostrar valor actual-->
</h3>
<!--Botones que realizaran los métodos-->
<button (click)="decrementBy(-1)">-1</button>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>

`

})

export class CounterComponent {
  constructor() { //Constructor vacio
  }
  public title: string = 'Hola Mundo';
  public counter = 10; //Valor por defecto 10

  increaseBy(value: number):void{ //Método incrementar valor counter en +1
    this.counter += value;
  }

  decrementBy(value: number):void{ //Método incrementar valor counter en -1
    this.counter -= value;
  }

  reset(): void{  //Método para resetear valor counter a 10
    this.counter =10;

  }
}
