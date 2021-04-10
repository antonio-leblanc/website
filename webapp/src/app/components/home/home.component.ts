import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private geo:GeoService) { }

  ngOnInit(){
    this.geo.mapInit();
  }
}
