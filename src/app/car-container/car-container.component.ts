import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-container',
  templateUrl: './car-container.component.html',
  styleUrls: ['./car-container.component.scss']
})
export class CarContainerComponent implements OnInit {

  filteredObjectData: any;
  constructor() { }

  ngOnInit() {
  }

  loadTopicOffset($event) {
    console.log('loadFilteredevent:: ', $event);
    this.filteredObjectData = $event;
  }

}
