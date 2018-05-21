import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarDetailService } from './car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
  providers: [CarDetailService]
})
export class CarDetailComponent implements OnInit {

  topicOffsetData: any;
  showCarDetails = false;
  @Input() filteredObject: any;

  car: string;


  constructor(public router: Router,
    public route: ActivatedRoute, public topicOffsetService: CarDetailService
  ) { }

  ngOnInit() {
    console.log('hello `filtered events` component');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    console.log('filteredObject inside `FilteredEventsComponent` filteredObject :: ', this.filteredObject);
    if (this.filteredObject) {
      this.car = this.filteredObject.carName;
      const queryParams: any = {
        carName : this.car
      };
      this.fetchTopicOffsetDetail(queryParams);
    }
  }
  fetchTopicOffsetDetail(queryParams) {
    this.topicOffsetService.fetchTopicOffset(queryParams).subscribe(res => {
      this.topicOffsetData = (res && res.carObject) ? res.carObject : null;
      this.showCarDetails = true;
      console.log('topicOffsetData: ', this.topicOffsetData);
    });
  }


}
