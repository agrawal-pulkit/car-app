import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() showCarDetails = new EventEmitter<boolean>();

  showBrand = false;
  showFord = false;
  showAcura = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('Nav bar component loaded.');

  }

  toggleCar(event) {
    // event.stopPropagation();
    this.showBrand = !this.showBrand;
    this.showFord = false;
    this.showAcura = false;
  }


  selectCar(event, car) {
    const carObject: any = {};
    carObject.carName = car;
    event.stopPropagation(event);
    this.showCarDetails.emit(carObject);
  }

  onClickShowFord(event) {
    event.stopPropagation();
    this.showBrand = true;
    this.showFord = true;
    this.showAcura = false;
  }

  onClickShowAcura(event) {
    event.stopPropagation();
    this.showBrand = true;
    this.showAcura = true;
    this.showFord = false;
  }


}
