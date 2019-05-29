import { Component, OnInit } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { IdType } from '../enums/id-type.enum';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  contactsList$: Observable<Array<Contact>>;
  selectedContact: Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }

  private getContacts() {
    this.contactsList$ = this.contactService.getContacts();
    this.contactsList$
      .pipe(
        take(1)
      )
      .subscribe((contactsList: Array<Contact>) => {
        this.selectedContact = { ...contactsList[0] };
      });
  }

}
