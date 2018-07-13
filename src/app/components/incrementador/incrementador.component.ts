import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda con', this.leyenda);
    console.log('Progreso con', this.progreso);
   }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  cambiarValor(valor: number) {
    this.progreso += valor;
    if (this.progreso >= 100) {
      this.progreso = 100;
    }
    if (this.progreso <= 0) {
      this.progreso = 0;
    }
    this.txtProgress.nativeElement.focus();

    this.cambioValor.emit( this.progreso );
  }

  onChanges( newValue: number ) {
    this.progreso = newValue;
    if (newValue >= 100) {
      this.progreso = 100;
    }
    if (newValue <= 0) {
      this.progreso = 0;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
