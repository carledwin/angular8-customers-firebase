import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from './../../models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService
        .update(this.customer.key, {active: isActive})
        .catch(err => console.log(err));
  }

  delete() {
    this.customerService
        .delete(this.customer.key)
        .catch(err => console.log(err));
  }

}
