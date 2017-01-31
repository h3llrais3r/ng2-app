import { Component, OnInit } from '@angular/core';

import { Car, CarData } from './cars';

class PrimeCar implements Car {
  constructor(public vin?, public year?, public brand?, public color?) { }
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  displayDialog: boolean;

  car: Car = new PrimeCar();

  selectedCar: Car;

  newCar: boolean;

  cars: Array<Car> = CarData;
  //cars: Car[];

  constructor() { }

  ngOnInit() {
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    if (this.newCar)
      this.cars.push(this.car);
    else
      this.cars[this.findSelectedCarIndex()] = this.car;

    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    this.cars.splice(this.findSelectedCarIndex(), 1);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }
}
