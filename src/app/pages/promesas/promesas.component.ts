import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar3().then(
      msg => console.log('Termino!', msg)
    )
      .catch(error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }

  contar3(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        console.log('contador', contador);

        if (contador === 3) {
          resolve( true );
          // reject('Simplemente trono');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
