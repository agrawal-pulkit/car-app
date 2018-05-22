import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-container',
  templateUrl: './car-container.component.html',
  styleUrls: ['./car-container.component.scss']
})
export class CarContainerComponent implements OnInit {

  carObjectData: any;
  constructor() { }

  ngOnInit() {
  }

  loadCarDetails($event) {
    console.log('loadCarDetailsevent:: ', $event);
    this.carObjectData = $event;
  }

}
