import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input('labels') ChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('data') ChartData: number[] = [10, 30, 70];
  @Input('type') ChartType: string = 'doughnut';
  @Input('title') ChartTitle: string = 'Title';

  constructor() { }

  ngOnInit() {
  }

}

//  Este componente fue sacado de:
//    ng2-charts - https://valor-software.com/ng2-charts/

//  Este componente genera graficas

// Uso:
//   <app-grafica
//     [title] = "grafico.leyenda"   Nos da el titulo que aparecera en la grafica
//     [labels] = "grafico.labels"   Son las etiquetas de los datos de las graficas
//     [data] = "grafico.data"       Datos que se usan en la grafica tienen que estar alineados con las labels
//     [type] = "grafico.type" >     Tipo de Grafica
//   </app-grafica>


// Dependencias:
// npm install ng2-charts --save
// npm install chart.js --save
