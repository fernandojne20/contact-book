import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IdType } from '../enums/id-type.enum';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // BASE_URL = 'http://localhost:3000';
  BASE_URL = 'https://contact-book-addi.herokuapp.com';
  constructor(private http: HttpClient) { }


  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.BASE_URL}/contacts`);
  }

  getTempContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.BASE_URL}/contacts/temp`);
  }

  createContact(contact: Contact) {

    return this.http.post(`${this.BASE_URL}/contacts/temp`, contact);
  }

  citizenValidation(contact: Contact) {
    return this.http.post(`${this.BASE_URL}/citizenValidation`, {contact});
  }

  legalValidation(contact: Contact) {
    return this.http.get(`${this.BASE_URL}/legalValidation/${contact.identification}`);
  }

  getScore(contact: Contact) {
    return this.http.get(`${this.BASE_URL}/contacts/score/${contact.identification}`);
  }

  savePermanent(contact: Contact) {
    return this.http.post(`${this.BASE_URL}/contacts/savePermanent`, {...contact});
  }
}

