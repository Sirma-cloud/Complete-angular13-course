import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css']
})
export class CustomListComponent {

  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'Young Filly', address: '', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'John Smith', address: '', city: 'New York', country: 'USA'},
    {customerNo: 3, name: 'Mary Ann', address: '', city: 'Berlin', country: 'Germany'},
    {customerNo: 4, name: 'Kevin Sirma', address: '', city: 'Melborne', country: 'Australia'},
    {customerNo: 5, name: 'Millicent Cherop', address: '', city: 'Eldoret', country: 'Kenya'}
  ]
}
