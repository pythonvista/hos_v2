import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @ViewChild('myCanvas',{static: false})
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = 'line';
  public chartData: any[];
  public chartData1: any[];
  public chartData2: any[];


  public chartLabels: any[];
  public chartColors: any[];
  public chartColors1: any[];
  public chartColors2: any[];
  public chartOptions: any;

  constructor() { }

  ngOnInit() {
    this.chartData = [{
      data: [3, 1, 4, 2, 5],
      label: 'Patients',
      fill: true
    }];
    this.chartData1 = [{
      data: [7, 5, 4, 2, 7],
      label: 'Patients',
      fill: true
    }];
    this.chartData2 = [{
      data: [1, 3, 7, 5, 9],
      label: 'Patients',
      fill: true
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors = [{
      backgroundColor: 'rgb(250,125,192)',
         borderColor: '105,159,177,1'
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors1 = [{
      backgroundColor: 'rgb(153, 250, 166)',
         borderColor: '153, 250, 166,1'
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors2 = [{
      backgroundColor: 'rgb(99,216,252)',
         borderColor: '105,159,177,1'
    }];
    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
         drawTime: 'beforeDatasetsDraw',
         annotations: [{
            type: 'box',
            id: 'a-box-1',
            yScaleID: 'y-axis-0',
            yMin: 0,
            yMax: 1,
            backgroundColor: '#4cf03b'
         }, {
            type: 'box',
            id: 'a-box-2',
            yScaleID: 'y-axis-0',
            yMin: 1,
            yMax: 2.7,
            backgroundColor: '#fefe32'
         }, {
            type: 'box',
            id: 'a-box-3',
            yScaleID: 'y-axis-0',
            yMin: 2.7,
            yMax: 5,
            backgroundColor: '#fe3232'
         }]
      }
    }


  }
 

}
