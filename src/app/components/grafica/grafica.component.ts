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

//  Este componente genera graficas
//  Dependencias:
//    ng2-charts - https://valor-software.com/ng2-charts/