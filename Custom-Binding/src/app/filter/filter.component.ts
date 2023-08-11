// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-filter',
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.css']
// })
// export class FilterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   @Input('total') all: number = 0;
//   @Input() free: number = 0;
//   @Input() premium: number = 0;

//   selectedRadioButtonValue: string = 'All';

//   @Output()
//   filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

//   onRadioButtonSelectionChanged(){
//     this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
//     //console.log(this.selectedRadioButtonValue);
//   }
// }
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // We can pass data from parent component to child component using @input decorator.
  // This is also called custom binding 
  // because here we bind custom properties of child 
  // component class with the property or method of a parent component class
  @Input('total') all: number =0;
  @Input('bure') free: number =0;
  @Input() premium: number=0;

  selectedRadioButtonValue: string = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue);

  }
}