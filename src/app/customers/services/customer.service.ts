import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private dbPath = '/customers';
  customersRef: AngularFireList<Customer> = null;

  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }

  create(customer: Customer): void {
    this.customersRef.push(customer);
  }

  update(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

  getAll(): AngularFireList<Customer> {
    return this.customersRef;
  }

  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
}
