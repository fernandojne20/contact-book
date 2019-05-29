import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IdType } from '../enums/id-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of([this.generateContact(1), this.generateContact(2), this.generateContact(3)])
    .pipe(delay(2000));
  }

  getTempContacts() {
    return of([this.generateContact(4), this.generateContact(5), this.generateContact(6)])
    .pipe(delay(2000));
  }

  private generateContact(index: number): Contact {
    return {
      idType: IdType.CEDULA,
      identification: '1140' + index,
      expeditionDate: new Date(),
      phone: 3012447955,
      name: 'contact' + index,
      lastName: 'lastname' + index
    };
  }
}

