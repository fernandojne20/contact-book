import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;
  @Output() validate: EventEmitter<Contact>;
  constructor() {
    this.validate = new EventEmitter<Contact>();
   }

  ngOnInit() {
  }

  validateContact(contact: Contact) {
    this.validate.emit(contact);
  }
}
