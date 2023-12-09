import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatasInput!: WeatherDatas;

  ngOnInit(): void {
    console.log(
      'Dados recebidos do componente pai - weather-card: ',
      this.weatherDatasInput
    );
  }
}
