import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-barra-horizontal',
  templateUrl: './barra-horizontal.component.html',
  styleUrls: ['./barra-horizontal.component.css']
})
export class BarraHorizontalComponent implements OnDestroy{

  @Input() results:any[] = [];

  // results: any[] =  [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   }
  // ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'

  // intervalo;

  constructor() {

    //  this.intervalo = setInterval( () => {
    //   console.log('tick');

    //   const newResults = [...this.results]
    //   for(let i in newResults ) {
    //     newResults[i].value = Math.round(Math.random()*500);
    //   }
    //   this.results = [...newResults]
    // }, 1500 )
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

}
