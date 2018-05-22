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

  carObjectData: any;
  showCarDetails = false;
  @Input() carObject: any;

  car: string;


  constructor(public router: Router,
    public route: ActivatedRoute, public carDetailService: CarDetailService
  ) { }

  ngOnInit() {
    console.log('hello `Car Details` component');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    console.log('carObjectData inside `CarDetailComponent` carObjectData :: ', this.carObjectData);
    if (this.carObject) {
      this.car = this.carObject.carName;
      const queryParams: any = {
        carName : this.car
      };
      this.fetchTopicOffsetDetail(queryParams);
    }
  }
  fetchTopicOffsetDetail(queryParams) {
    this.carDetailService.fetchCarDetail(queryParams).subscribe(res => {
      this.carObjectData = (res && res.carObject) ? res.carObject : null;
      this.showCarDetails = true;
      console.log('carObjectData: ', this.carObjectData);
    });
  }


}
