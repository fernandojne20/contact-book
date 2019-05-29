import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contactsList: Array<Contact>;
  @Output() selectedContact: EventEmitter<Contact>;
  constructor() {
    this.selectedContact = new EventEmitter<Contact>();
  }

  ngOnInit() {
  }

  selectContact(contact: Contact) {
    this.selectedContact.emit(contact);
  }

}
